>[!WARNING]
This package is a work in progress. Fully functional but not fully tested, please report any bugs you find, and feel free to [contribute](#contributing).

# `astro-fouc-killer`

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that eliminates FOUC (Flash Of Unstyled Content) by injecting an inline script that sets the `'dark'` class on the document element before the page is rendered. The script gets the local storage value or, if one isn't provided, uses system preference to determine the theme.

This integration has two parts, the FOUC (Flash Of Unstyled Content) killer script and a local storage listener:
- The FOUC killer script is injected inline into the `<head>` of every page and ensures that the correct dark/light mode CSS is applied before the page is rendered. This eliminates the FOUC that occurs when the page first loads.

- The second part is the local storage listener, this script listens for changes to the local storage value and updates the class on the root element of the page accordingly. This is optional, but can serve as a part of your dark mode implementation. See [configuration options](#configuration) below.

## Usage

### Prerequisites
>[!IMPORTANT]
Only works with class based dark mode. 


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

```bash
bun astro add astro-fouc-killer
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

```bash
bun add astro-fouc-killer
```

2. Add the integration to your astro config

```diff
import { defineConfig } from 'astro/config';
+import astroFoucKiller from "astro-fouc-killer";

export default defineConfig({
  integrations: [
+    astroFoucKiller(),
  ],
});
```

### Configuration

#### Local Storage Key
The default value for the local storage key is `themeToggle`, pass a different key to the integration options to change this.

```diff
  integrations: [
    astroFoucKiller({
+     localStorageKey: 'dark-mode',
    }),
  ],
```
#### Include Storage Listener
By default, the storage listener is not included. If you want to include it, set the `includeStorageListener` option to `true`.
```diff
  integrations: [
    astroFoucKiller({
+     includeStorageListener: true,
    }),
  ],
```

## Contributing and Testing

This package is structured as a monorepo:

- `playground` contains code for testing the package
- `package` contains the actual package

> [!TIP]
> The following commands are run from the root of the repository. You can also `cd` to each directory to run `pnpm dev` directly, if you want.

Install dependencies using pnpm: 

```bash
pnpm i --frozen-lockfile
```

Start the package watcher:

```bash
pnpm package:dev
```

Start the playground:

```bash
pnpm playground:dev
```

You can now edit files in `package`. Please note that making changes to those files may require restarting the playground dev server.

## Licensing

[AGPL-3.0 Licensed](https://github.com/AVGVSTVS96/astro-fouc-killer/blob/main/LICENSE). Made with ❤️ by [Bassim [AVGVSTVS96]](https://github.com/avgvstvs96).

