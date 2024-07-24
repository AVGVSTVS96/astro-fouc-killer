# astro-fouc-killer

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that eliminates FOUC (Flash Of Unstyled Content) by injecting an inline script that sets the `'dark'` class on the document element before the page is rendered. The script gets the local storage value or, if one isn't provided, uses system preference to determine the theme.

This package is structured as a monorepo:

- [`playground`](./playground) contains code for testing the package
- [`package`](./package) contains the actual package

To see how to get started, check out the [package README](./package/README.md)



## Licensing

[AGPL-3.0 Licensed](./LICENSE). Made with ❤️ by [Bassim [AVGVSTVS96]](https://github.com/avgvstvs96).
