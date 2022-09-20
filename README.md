# Nuxt 3 Hackernews

This is still a work in progress. We covered it on stream and hit a few bugs. As Nuxt 3 stabilizes for release we will revisit and finish up.

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Create
This project was created using pnpm:
```
pnpm dlx nuxi init nuxt3-app-rc9
# or
#npx nuxi init nuxt3-app-rc9
# or (latest v3)
#npx nuxi init nuxt3-app-rc9 -t v3-edge
```

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Directory Structure:

`.nuxt`: Nuxt uses the .nuxt/ directory in development to generate your Vue application.

`.output`: Nuxt creates the .output/ directory when building your application for production.

`assets`: The assets/ directory is used to add all the website's assets that the build tool (webpack or Vite) will process.

`components`: The components/ directory is where you put all your Vue components which can then be imported inside your pages or other components ([learn more](https://vuejs.org/guide/essentials/component-basics.html#components-basics)).

`composables`: Nuxt 3 supports composables/ directory to automatically import your Vue composables into your application using [auto-imports](https://v3.nuxtjs.org/guide/concepts/auto-imports) !

`content`: The [Nuxt Content module](https://content.nuxtjs.org/) reads the `content/` directory in your project and parses `.md`, `.yml`, `.csv` and `.json` files to create a file-based CMS for your application.

`layouts`: Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.

`middleware`: Nuxt provides a customizable route middleware framework you can use throughout your application, ideal for extracting code that you want to run before navigating to a particular route.

`node_modules`: The package manager (npm or yarn or pnpm ) creates the node_modules directory to store the dependencies of your project.

`pages`: Nuxt provides a file-based routing to create routes within your web application using [Vue Router](https://router.vuejs.org/) under the hood.

`plugins`: Nuxt will automatically read the files in your `plugins` directory and load them. You can use `.server` or `.client` suffix in the file name to load a plugin only on the server or client side. All plugins in your plugins/ directory are auto-registered, so you should not add them to your nuxt.config separately.

`public`: The `public/` directory is directly served at the server root and contains public files that have to keep their names (e.g. `robots.txt`) or likely won't change (e.g. `favicon.ico`).

`server`: Read more in [Guide > Features > Server Routes](https://v3.nuxtjs.org/guide/features/server-routes).

`.gitignore`: A .gitignore file specifies intentionally untracked files that git should ignore.

`app.vue`: The app.vue file is the main component in your Nuxt 3 applications.
app.config.ts: You can easily provide runtime app configuration using this file. It can have either of `.ts`, `.js`, or `.mjs` extensions.

`.nuxtignore`: You can use a .nuxtignore file to let Nuxt ignore `layout`, `pages`, `components`, `composables` and `middleware` files in your project’s root directory (`rootDir`) during the build phase. The `.nuxtignore` file is subject to the same specification as `.gitignore` and `.eslintignore` files, in which each line is a glob pattern indicating which files should be ignored.

`nuxt.config.ts`: Nuxt can be easily configured with a single nuxt.config file, which can have either a `.js`, `.ts` or `.mjs` extension. To ensure your configuration is up to date, Nuxt will make a full restart when detecting changes in the main configuration file, the `.env`, `.nuxtignore` and `.nuxtrc` dotfiles.

`package.json`: The package.json file contains all the dependencies and scripts for your application ([learn more](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)).
tsconfig.json: Nuxt automatically generates a `.nuxt/tsconfig.json` file with the resolved aliases you are using in your Nuxt project, as well as with other sensible defaults. You can benefit from this by creating a `tsconfig.json` in the root of your project with the following content:
```js
{
  "extends": "./.nuxt/tsconfig.json"
}`
```

To find out more checkout [Direcrtory Structure](https://v3.nuxtjs.org/guide/directory-structure/nuxt).

## Deploy 
### On Netlify
```
NITRO_PRESET=netlify pnpm build
ntl deploy

# then follow the steps:
Site name (optinoal): YOUR-SITE-NAME
Publish directory: dist

# Deploy on prod if everything is fine on draft URL:
netlify deploy --prod
```

### On Vercel
```
# Make sure vercel-cli is installed:
npm i -g vercel

# deploy by entering:
vercel
```
then follow the steps, and change the `Build command` from `nuxt generate` to `nuxt build`.

P.S. If you've installed with `pnpm` with `--shamefully-hoist` then you'll need to run this when on vercel:
```
echo 'shamefully-hoist=true' > .npmrc
```
