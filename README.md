## https://khanhquoc.press

Source code for my blog.

### Installation

You will need [gatsby](https://github.com/gatsbyjs/gatsby), obviously.
I also use [Yarn](https://yarnpkg.com/lang/en/) instead of `npm`. Give it a try, you are gonna love it.

```
yarn add --global gatsby
git clone https://github.com/bkdev98/khanhquoc.press
cd khanhquoc.press
yarn
yarn dev
```

You should have the site running on `localhost:8000`.

### Deployment

Gatsby can be deployed on any static server. This one is deployed via GitHub Pages on the master branch.

### Cross-post to Medium

Make a `.env` file in `./src/scripts` and set your [Medium Integration Token](https://help.medium.com/hc/en-us/articles/215274738-Integration-tokens) like so:

```
TOKEN=YOUR_TOKEN_HERE
```

That's it. Cross-posting works out of the box with:

```
npm run medium
```

Make sure you edit `config.toml` to reflect *your own* website.
