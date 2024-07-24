# Astro FOUC Killer Test Playground

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## Testing `astro-fouc-killer`
Testing the package is simple:

 1. `pnpm run dev` from the playground directory or `pnpm playground:dev` from the root directory
 2. Open the browser at `http://localhost:4321`
 3. Set prefers-color-scheme to dark and see if the background is changes when the page reloads and ensure there is no FOUC when reloading
 4. Create a local storage item with the key `theme-test` and set it to `dark`. See if the background changes immediately when the `includeStorageListener` option is `true`, or when refreshing the page when it's `false`
 5. Change the `localStorageKey` option in `astro.config.mts` and see if it still works, try testing with the default value of `themeToggle`

> [!TIP]
> `astro-fouc-killer` will log to the console which scripts were injected. When `includeStorageListener` is set to `true` (default), the local storage listener will also be injected, otherwise it will be omitted and only the FOUC killer script will be injected.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mts
└── package.json


```


## 🧞 Commands

All commands are run from the playground directory:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
