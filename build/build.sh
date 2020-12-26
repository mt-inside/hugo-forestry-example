#!/usr/bin/env bash

declare base_url="${1:?need a base URL}"

hugo --enableGitInfo -b https://${base_url} -s . -d public
