# hugo-forestry-example

![build and publish status](https://github.com/mt-inside/hugo-forestry-example/workflows/Build%20and%20Publish/badge.svg)

## Showcases

* TODO

## Setup and Use

### Building the site

Run `build/build.sh`. This contains all the magic options to drive hugo right. The site will be build into `/public`.
A dev server can be run with `build/preview.sh`

### Forestry Setup

* Sign up
* Add a new site, type hugo, repo: your fork of this repo
* Forestry setup is manual
  * UPDATE: I'm not sure this is true. Forestry stores its config in the git repo, so I think if you aim it as this repo, it'll pick up the custom config.
  * Preview setup
    * _environment_: `HUGO + NODEJS 12`
    * _install dependencies command_: yarn install
    * _build command_: yarn run preview

### CI/CD with GitHub Actions

This repo contains a GitHub action to build the hugo site and deploy to a GCS bucket.
That builds the site, and publishes it to a GCS bucket called `GCS_BUCKET` in GCP project `GCP_PROJECT` using the service account key in `GCS_SA_KEY`.
These config items are read from GitHub repository secrets.

To use this action, you will need:
* A GCS bucket with the name of your domain, with public access turned on
* Appropriate "front-end" infra, eg a DNS record CNAMEing your domain at `c.storage.googleapis.com.`, a GCP L7 LB, CloudFlare, or some combination
* A GCP ServiceAccount with `roles/objectAdmin` on the bucket.
* A json-format key for that service account, put in the `GCS_SA_KEY` repo secret of your forked repo
* Repo "secrets" `GCP_PROJECT` and `GCP_BUCKET` set.

Either set this up manually, or none of this is hard to terraform.

NB: It would be shiny to have separate build and publish status badges (which are per-workflow). It would actually be useful to separate the workflows, as we want built to happen on every `push` and `PR`, but publish to only happen for master builds. However it's not easy to share artifacts between workflows (though it's planned) and it feels bad to have the publish workflow rebuild the site.
