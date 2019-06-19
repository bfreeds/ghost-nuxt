# ghost-nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> GhostCMS Nuxt.js module

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add the `ghost-nuxt` dependency with `yarn` or `npm` to your project
2. Add `ghost-nuxt` to the `modules` section of `nuxt.config.js`
3. Configure it:

```js
/*** nuxt.config.js ***/

{
  modules: [
    // Simple usage
    'ghost-nuxt',

    // With options
    ['ghost-nuxt', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## Resources  
- [Guide to NuxtJS Modules](https://nuxtjs.org/guide/modules)
- [nuxt-ghost-starter](https://github.com/Maxbrain0/nuxt-ghost-starter), for an example of a NuxtJS project using GhostCMS without a module.  
- [storyblok-nuxt](https://github.com/storyblok/storyblok-nuxt), for inspiration of similar NuxtJS Module on NPM.
## License

[MIT License](./LICENSE)

Copyright (c) Brandyn Friedly

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/ghost-nuxt.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/ghost-nuxt

[npm-downloads-src]: https://img.shields.io/npm/v/ghost-nuxt/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/ghost-nuxt

[circle-ci-src]: https://img.shields.io/circleci/project/github/bfreeds/ghost-nuxt.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/bfreeds/ghost-nuxt

[codecov-src]: https://img.shields.io/codecov/c/github/bfreeds/ghost-nuxt.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/bfreeds/ghost-nuxt

[david-dm-src]: https://david-dm.org/bfreeds/ghost-nuxt/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/bfreeds/ghost-nuxt

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
