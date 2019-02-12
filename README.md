# web-app-bootstrap

---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]

[npm-image]: http://img.shields.io/npm/v/web-app-bootstrap.svg?style=flat-square
[npm-url]: http://npmjs.org/package/web-app-bootstrap
[travis-image]: https://img.shields.io/travis/app-bootstrap/web-app-bootstrap.svg?style=flat-square
[travis-url]: https://travis-ci.org/app-bootstrap/web-app-bootstrap
[coveralls-image]: https://img.shields.io/coveralls/app-bootstrap/web-app-bootstrap.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/app-bootstrap/web-app-bootstrap?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=8-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars1.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars3.githubusercontent.com/u/3807955?v=4" width="100px;"/><br/><sub><b>BernardTolosajr</b></sub>](https://github.com/BernardTolosajr)<br/>|
| :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Tue Feb 12 2019 10:59:00 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->

- [app-bootstrap/todo](//github.com/app-bootstrap/todo)

## About antd-sample

Give a guiding example of 100% coverage based on Macaca:

- source code: https://github.com/app-bootstrap/web-app-bootstrap/tree/master/antd-sample
- test case: https://github.com/app-bootstrap/web-app-bootstrap/tree/master/test/antd-sample

```bash
$ npm run dev:test
$ npm run test:antd
```

## Include

```
├── flux             # flux
├── redux            # redux
├── plain            # vue with event-bus
├── mobx             # mobx
├── vuex             # vuex
├── vuex-ts          # vuex & typescript
├── unstated         # unstated
├── app-bootstrap    # app-boostrap based on Antd mobile
├── antd-sample      # sample based on Antd
└── test             # UI test case
```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run ci

# run all tests
npm test

# run plain implementation test
npm run test:plain
```

