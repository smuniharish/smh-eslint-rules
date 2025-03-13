# smh-eslint-rules

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

`smh-eslint-rules` is a custom ESLint plugin that provides rules to enforce best practices and avoid common pitfalls in JavaScript and TypeScript codebases. This plugin is particularly useful for projects using JSX and TypeScript.

## Installation
```sh
# NPM
npm install smh-eslint-rules --save-dev

#Yarn
yarn add smh-eslint-rules --dev
```
## Usage

```js
{
  "plugins": ["smh-eslint-rules"],
  "rules": {
    "smh-eslint-rules/no-commented-jsx": [
      "error",
      {
        "ignorePattern": "TODO|FIXME" // Optional: Ignore comments containing TODO or FIXME
      }
    ]
  }
}

```
And we're done 🎉
## Contributing

Contribution are always welcome, no matter how large or small !

We want this community to be friendly and respectful to each other.Please follow it in all your interactions with the project.

Please feel free to drop me a mail [S MUNI HARISH](mailto:samamuniharish@gmail.com?subject=[GitHub])

## Acknowledgements

Thanks to the authors of these libraries for inspiration

## Sponsor & Support

To keep this library maintained and up-to-date please consider [sponsoring it on GitHub](https://github.com/sponsors/smuniharish). Or if you are looking for a private support or help in customizing the experience, then reach out to me on Linkedin [@smuniharish](https://www.linkedin.com/in/smuniharish).

## License

[Apache License 2.0](./LICENSE)

---

Made with ❤️
