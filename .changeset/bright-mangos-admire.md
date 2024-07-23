---
"astro-fouc-killer": minor
---

feat(options): Make local storage listener optional

The local storage listener isn't needed to eliminate FOUC, so it's now optional.

The local storage listener toggled the `dark` class on the document element if the local storage key is set to `dark`. This is useful to help implement a simple dark mode solution, while taking system preferences into account.