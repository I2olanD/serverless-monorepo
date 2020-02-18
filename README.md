# Serverless monorepo for building and testing lambdas

## What you need
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) - Dependency manager
* [Lerna](https://github.com/lerna/lerna) - Monorepo manager

## Development

**Installing dependencies for packages:**
In root:

```sh
$ lerna bootstrap
```

**Verify by running tests:**
```sh
$ yarn test
```

**Build**
```sh
$ yarn build
```

## Author
* **Roland Olah**
