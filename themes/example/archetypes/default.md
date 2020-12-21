---
title: Item {{ .Name }}
date: {{ .Date }}
draft: true
description: {{ replace .Name "-" " " | title }} description
---

This is a template for new pages of any type without its own archetype
Make with: `hugo new foo/bar.md`

Type: foo
Layout: default
Object: bar
