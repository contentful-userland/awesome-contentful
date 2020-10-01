const got = require("got");
const { join } = require("path");
const { readFile, writeFile } = require("fs").promises;
const { GITHUB_TOKEN } = process.env;
const { stripIndent, stripIndents } = require("common-tags");

const README_PATH = join(__dirname, "..", "..", "..", "README.md");
const awesomeSections = require("../../../data/awesome-things.json");

function getQuery(items) {
  return stripIndent`
    query {
      ${items
        .map((project) => {
          const [owner, name] = project.split("/");
          return `
          ${name.replace(
            /[-]/g,
            "_"
          )} : repository(name: "${name}", owner: "${owner}") {
            nameWithOwner
            description
            stargazers {
              totalCount
            }

            defaultBranchRef {
              name
            }
          }
          `;
        })
        .join("\n")}
    }`;
}

async function fetchGitHubData({ title, items }) {
  const response = await got.post(`https://api.github.com/graphql`, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query: getQuery(items) }),
  });

  return {
    title,
    items,
    data: JSON.parse(response.body).data,
  };
}

async function getGeneratedReadme(data) {
  return (await readFile(README_PATH, "utf8")).replace(
    /<!-- AWESOME_THINGS.*AWESOME_THINGS_END -->/gs,
    [
      "<!-- AWESOME_THINGS -->",
      data.map(
        ({ title, data }) =>
          stripIndents`
          ## ${title}

          ${Object.values(data)
            .map(
              ({ nameWithOwner, defaultBranchRef, description, stargazers }) =>
                stripIndent`
                  ### [${description}](https://github.com/${nameWithOwner}) (${stargazers.totalCount} stars)
                  <details>
                    <summary>Show screenshot</summary>
                    <p>
                      <img src="https://github.com/${nameWithOwner}/raw/${defaultBranchRef.name}/screenshot.png">
                    </p>
                  </details>`
            )
            .join("\n\n")}`
      ),
      "<!-- AWESOME_THINGS_END -->",
    ].join("\n\n")
  );
}

(async () => {
  const data = await Promise.all(awesomeSections.map(fetchGitHubData));
  const readme = await getGeneratedReadme(data);

  console.log(`Generated readme:\n${readme}`);
  await writeFile(README_PATH, readme);
})();
