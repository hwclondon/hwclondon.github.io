# hwclondon
Homebrew Website Club London website

![Theme screenshot](./theme-image.jpg)


## Prerequisites

- [Node and NPM](https://nodejs.org/)

## Running locally

```bash
# install the dependencies
npm install

# External data sources can be stashed locally
npm run seed

# It will then be available locally for building with
npm run start
```

## Add some Netlify helpers
Netlify Dev adds the ability to use Netlify redirects, proxies, and serverless functions.

```bash
# install the Netlify CLI in order to get Netlify Dev
npm install -g netlify-cli

# run a local server with some added Netlify sugar in front of Eleventy
netlify dev
```

A serverless functions pipeline is included via Netlify Dev. By running `netlify dev` you'll be able to execute any of your serverless functions directly like this:

- /.netlify/functions/hello
- /.netlify/functions/fetch-joke


### Redirects and proxies

Netlify's Redirects API can provide friendlier URLs as proxies to these URLs.

- /api/hello
- /api/fetch-joke
