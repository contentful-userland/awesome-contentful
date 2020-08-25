#!/bin/sh

if [ -z "$(git status --porcelain)" ]; then
  echo "Nothing to commit all clean"
else
  git config user.name github-actions
  git config user.email github-actions@github.com
  git add .
  git commit -m "Re-generated readme"
  git push
fi
