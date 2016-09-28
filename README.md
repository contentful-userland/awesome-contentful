![Contentful Logo](logo.png)

Contentful is a content delivery backend with a RESTful JSON API, plus a web app for managing the content. Learn more in our [developer center](https://www.contentful.com/developers/docs/).

This repo collects third-party libraries and SDKs for working with Contentful. Contentful also ships supported [offical SDKs](https://www.contentful.com/developers/docs/code/libraries/) for many languages including Ruby, JavaScript, Python, Objective-C and Java.

These third-party libraries and SDKs are not officially supported by Contentful and may be incomplete, but we've at least tried them out. If you want to include your own libraries on this list open a pull request that matches our [contribution guidelines](CONTRIBUTING.md)

## SDKs

* [Contentpull][contentpull] - A node module that interfaces with the CDA. Includes built-in parsers and query helpers.
* Usemarkup - [PHP 5.4+ clients for Contentful Delivery and Management API's][27]
* Mircobabini - [PHP Contentful Delivery API Library][29]
* Mircobabini - [PHP Contentful Management API Library][30]
* Doorhinge - [PHP Client for the Contentful Delivery API][32]
* Incraigulous - [PHP SDK][39]
* ryan-codingintrigue - [C# SDK for the Contentful Delivery API][33]
* Mrappweareratio - [.NET PCL for Contentful][34]
* Python - [Python Content Delivery API Library][41]

## Framework Integrations
* Ember - [Ember Contentful Delivery Adapter][42]
* Usemarkup - [PHP Symfony2 Bundle][28]
* Dothiv - [PHP Symfony ContentfulBundle][31]
* IDEO - [Ember Integration][41]
* [Contentful Rails][3], a Ruby gem which enables integrating Contentful with Rails apps.
* Jurgen Van de Moere - [angular-contentful][angular-contentful], an AngularJS library to access the Contentful Content Delivery API
* David Pett - [ember-data-contentful](https://github.com/davidpett/ember-data-contentful), an adapter for Ember Data.

## Static Site Generators

* [jekyll-contentful][40], a plugin for Jekyll, a static site generator
* [Roots][2], use Roots, a static site generator, and manage content with Contentful.
* [contentful-static][contentful-static] - Simple static site generator backed by the Contentful Sync API.
* [gulp-metalsmith][gulp-metalsmith] - Metalsmith + gulp static site tool. Tutorial includes a sample Contentful integration.
* [Spike Contentful][43] - A standard webpack plugin, that is intended to be used with spike.
* [Stacy][44] - Use Contentful to manage websites hosted at Amazon S3.

## Standalone Tools

* Mohamagdy - [Contentful-RSS][35]
* Jcreixell - [RSS Proxy for Contentful's Sync API][36]
* Zackiles - [Contentful Node Dashboard][37]
* Jurgen Van de Moere - [contentful-agent][contentful-agent], a node module to easily fetch entries from a Contentful space
* Jurgen Van de Moere - [contentful-webhook-server][contentful-webhook-server], a lightweight server to handle Contentful webhook HTTP requests
* Deane Barker - [contentful-webhook-server][38], a server framework in C# to handle Contentful HTTP webhooks
* [mc.uploader][45] A tool to upload markdown files with frontmatter to contentful

## Other useful libraries

* [ContentfulModel][4], a Ruby gem which helps accessing Contentful like a local data model.
* [slack-contentful](https://github.com/brh55/slack-contentful) - See when entries have been published on a Slack channel.

## Example Projects & Gists

* [How to parse JSON from Contentful webhook responses with contentful.rb](https://gist.github.com/neonichu/17a987aeeb256d4bf6f3)
* [How to clean up unused assets with the CMA](https://gist.github.com/grncdr/afc97da1869f5fb3aef1)
* [How to import CSV files with the CMA](https://gist.github.com/grncdr/9458c230ac838d73a559)

## Contributing
[See the guide](CONTRIBUTING.md)

[2]: https://github.com/carrot/roots-contentful
[3]: https://github.com/errorstudio/contentful_rails
[4]: https://github.com/errorstudio/contentful_model
[28]: https://github.com/usemarkup/ContentfulBundle
[31]: https://github.com/dothiv/ContentfulBundle
[35]: https://github.com/mohamagdy/contentful-rss
[36]: https://github.com/jcreixell/contentful-sync-rss
[37]: https://github.com/zackiles/contentful-node-dashboard
[40]: https://github.com/jvandemo/angular-contentful
[41]: https://github.com/ideo/ember-contentful/
[27]: https://github.com/usemarkup/contentful
[29]: https://github.com/mircobabini/contentful.php
[30]: https://github.com/mircobabini/contentful-management.php
[32]: https://github.com/doorhinge/contentful-client
[33]: https://github.com/ryan-codingintrigue/Contentful.NET
[34]: https://github.com/mrappweareratio/Contentful.SDK
[38]: https://github.com/deanebarker/contentful-webhook-server
[39]: https://github.com/incraigulous/contentful-sdk
[40]: https://github.com/dommmel/jekyll-contentful
[41]: https://github.com/contentful-labs/contentful.py
[42]: https://github.com/BondarenkoAlex/ember-contentful-delivery-adapter
[43]: https://github.com/Streenjw/spike-contentful
[44]: https://www.npmjs.com/package/stacy
[45]: https://github.com/rainforestapp/mc.uploader
[angular-contentful]: https://github.com/jvandemo/angular-contentful
[contentful-webhook-server]: https://github.com/jvandemo/contentful-webhook-server
[contentful-agent]: https://github.com/jvandemo/contentful-agent
[contentful-static]: https://github.com/Textalk/contentful-static
[gulp-metalsmith]: https://github.com/jelz/gulp-metalsmith/tree/master/tutorial
[contentpull]: https://github.com/remedyhealth/contentpull
