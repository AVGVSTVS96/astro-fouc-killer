# `astro-fouc-killer`

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that TODO:description

## Usage

### Prerequisites
>[!IMPORTANT]
Only works with class based dark mode. 

This integration sets the dark mode class on the root element of the page based on the local storage value or system preference, if no value is set in local storage.

The default value for the local storage key is `themeToggle`, pass a different key to the integration options to change this, for example:

```ts
import { defineConfig } from 'astro/config';
import astroFoucKiller from 'astro-fouc-killer';

export default defineConfig({
  integrations: [
    astroFoucKiller({
      localStorageKey: 'dark-mode',
    }),
  ],
}); 
```

### Installation

Install the integration **automatically** using the Astro CLI:

```bash
pnpm astro add astro-fouc-killer
```

```bash
npx astro add astro-fouc-killer
```

```bash
yarn astro add astro-fouc-killer
```

Or install it **manually**:

1. Install the required dependencies

```bash
pnpm add astro-fouc-killer
```

```bash
npm install astro-fouc-killer
```

```bash
yarn add astro-fouc-killer
```

2. Add the integration to your astro config

```diff
+import integration from "astro-fouc-killer";

export default defineConfig({
  integrations: [
+    integration(),
  ],
});
```

### Configuration

TODO:configuration

## Contributing

This package is structured as a monorepo:

- `playground` contains code for testing the package
- `package` contains the actual package

Install dependencies using pnpm: 

```bash
pnpm i --frozen-lockfile
```

Start the playground and package watcher:

```bash
pnpm dev
```

You can now edit files in `package`. Please note that making changes to those files may require restarting the playground dev server.

## Licensing

[MIT Licensed](https://github.com/TODO:/blob/main/LICENSE). Made with ❤️ by [TODO:](https://github.com/TODO:).

## Acknowledgements

TODO:
