This is a single page at this level.

This is kinda an abuse of the way Hugo wants to do things

It can be used for eg /about

Implementation:
* Touch `content/<type>/_index.md` to make the type "exist"
* Make `<theme>/layouts/<type>/list.html`
* That list html is meant to list the pages in section <type>, but just don't add the loop to do that, instead just build the page you want
* If the content of that page is suited to markdown, it can be put in `content/<type>/index.html` and is available as `{{ .Content }}`
  * this page is an example of that, in fact it's an extreeme example - we don't define a list layout for _typeSingle_, so it falls back to `layouts/_default/list.html`, which, in this theme, does ok - it displays the content, and since there are no pages in `content/typeSingle` the iterator doesn't execute its body even once
  * You can see it's not perfect, eg it's got the default title still, but hopefully this demonstrates a point
* If you really do just want arbitrary HTML and the content isn't easily loaded from markdown, just make a completely template-free html page
