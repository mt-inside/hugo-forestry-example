# hugo-forestry-example

![build and publish status](https://github.com/mt-inside/hugo-forestry-example/workflows/Build%20and%20Publish/badge.svg)

Showcases:

* TODO

Setup:

* Forestry
  * Sign up
  * Add a new site, type hugo, repo: your fork of this repo
  * Forestry setup is manual
    * UPDATE: I'm sure this is true. Forestry stores its config in the git repo, so I think if you aim it as this repo, it'll pick up the custom config.
    * Preview setup
      * _environment_: `HUGO + NODEJS 12`
      * _install dependencies command_: yarn install
      * _build command_: yarn run preview

Notes

* It would be shiny to have separate build and publish status badges (which are per-workflow). It would actually be useful to separate the workflows, as we want built to happen on every `push` and `PR`, but publish to only happen for master builds. However it's not easy to share artifacts between workflows (though it's planned) and it feels bad to have the publish workflow rebuild the site.
