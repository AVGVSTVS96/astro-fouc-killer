# astro-fouc-killer

## 0.5.0

### Minor Changes

- 62de437: feat(options): Make local storage listener optional

  The local storage listener isn't needed to eliminate FOUC, so it's now optional.

  The local storage listener toggled the `dark` class on the document element if the local storage key is set to `dark`. This is useful to help implement a simple dark mode solution, while taking system preferences into account.

## 0.4.0

### Minor Changes

- [dd50c46](https://github.com/AVGVSTVS96/astro-fouc-killer/commit/dd50c4652a58d4ed5751d76cfbd1b5cd9334fb4c): Full functionality achieved, user can define custom local storage key

## 0.3.0

### Minor Changes

- da40de0: First working version, using static local storage key

## 0.2.0

### Minor Changes

- 5614e9c: fix(options-error): Define default `localStorageKey` directly in virtual module

## 0.1.2

### Patch Changes

- 917c437: Add repo field to `package.json`

## 0.1.1

### Patch Changes

- d266503: Update README with "project still in development" warning

## 0.1.0

### Minor Changes

- 77dbab1: Initial Release
