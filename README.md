# json-config-store

---

[![Build Status](https://img.shields.io/circleci/project/zcong1993/json-config-store/master.svg?style=flat)](https://circleci.com/gh/zcong1993/json-config-store) [![npm version](https://badge.fury.io/js/json-config-store.svg)](https://badge.fury.io/js/json-config-store) [![npm](https://img.shields.io/npm/dm/json-config-store.svg)](https://www.npmjs.com/package/json-config-store)
[![codecov](https://codecov.io/gh/zcong1993/json-config-store/branch/master/graph/badge.svg)](https://codecov.io/gh/zcong1993/json-config-store)

> control your config with a json file

forked from [sindresorhus/conf](https://github.com/sindresorhus/conf), change the `constructor` to make it more flexible.

## Install

```bash
$ yarn add json-config-store
```

## Usage

```js
const Conf = require('json-config-store')

const conf = new Conf({
  cwd: __dirname, // required, path of the config file
  configName: 'my-conf' // config file name
})

// then ...
```

## Api

please see [sindresorhus/conf](https://github.com/sindresorhus/conf).

## License

MIT &copy; zcong1993
