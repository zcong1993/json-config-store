# json-config-store

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
