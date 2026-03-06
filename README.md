# Los Gatos / Monte Sereno ARES RACES website
This git repository contains the content for the static website for Los Gatos / Monte Sereno ARES RACES located at [lgmsar.org](https://lgmsar.org/).  

The website is deployed with the [lume](https://lume.land/) static site generator for [deno](https://deno.com/).

# Contributing
Please [fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo), make your changes in your fork and then [open a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to this repo.
You can use the built-in github web editor or their vscode web IDE to make changes. You do not necessarily have to clone the repo and edit files locally but that is also an option.

## Testing changes
When a pull request is opened against this repo, a dev version of the website will be created. the cloudflare-workers-and-pages bot will post a comment in your pull request with a link to the dev build with your changes, please open the link and verify your updates look correct.

## Updating existing pages
To update an existing page, you will need to find which markdown file in the src folder corresponds to the page you want to update. Usually the filename will be related to the page name, for example the [Nets](https://lgmsar.org/nets/) page is managed by the file [src/nets.md](src/nets.md). 

## Add new page
First, you need to decide where your page will go, will it be a top level page or nested under an existing page. You may want to use an existing page for a quick reference.
For a new page, create a .md file in the src folder. The name of the file will relate to the new url, so if you make a file called src/cool-page.md then you will make a new page at lgmsar.org/cool-page.  

At the top of all the markdown files, you need to add something like this
```markdown
---
title: "New Page"
nav_order: 9
---
````
the nav_order will change the ordering of the links on the navigation bar. See the [lumocs documentation](https://lumocs.56k.guru/usage/hierarchy/) for more details about the syntax of this section

## Adding Images and other files
To upload an image or some other file such as a PDF you can first put the file in src/files. then you can reference the file in markdown such as:
```markdown
![](../../files/chip-clone.webp)
[PDF of this script](../../files/net-control-script.pdf)
```
the `![]` is required for images unless you want to just put a link to the image, then you would just do `[link text](../../files/path-to-file)`  

For new images, you may want to convert images to the webp format as that is more efficient with modern web browsers vs jpg or png.

## Markdown syntax
For the most part, you can follow any markdown guide on what syntax is supported such as [Markdown Guide](https://www.markdownguide.org/basic-syntax/).  
There are a few special features from the lumocs theme we are using, [see documentation](https://lumocs.56k.guru/usage/markdown/)
