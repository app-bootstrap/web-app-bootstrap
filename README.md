# web-app-bootstrap
AHLAA BIK
---

[![NPM version][npm-image]][npm-url]
[![CI][CI-image]][CI-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]

[npm-image]: http://img.shields.io/npm/v/web-app-bootstrap.svg
[npm-url]: http://npmjs.org/package/web-app-bootstrap
[CI-image]: https://github.com/app-bootstrap/web-app-bootstrap/actions/workflows/ci.yml/badge.svg
[CI-url]: https://github.com/app-bootstrap/web-app-bootstrap/actions/workflows/ci.yml
[coveralls-image]: https://img.shields.io/coveralls/app-bootstrap/web-app-bootstrap.svg
[coveralls-url]: https://coveralls.io/r/app-bootstrap/web-app-bootstrap?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=8-green.svg
[node-url]: http://nodejs.org/download/

<!-- GITCONTRIBUTOR_START -->

## Contributors

|[<img src="https://avatars.githubusercontent.com/u/1011681?v=4" width="100px;"/><br/><sub><b>xudafeng</b></sub>](https://github.com/xudafeng)<br/>|[<img src="https://avatars.githubusercontent.com/u/1209810?v=4" width="100px;"/><br/><sub><b>paradite</b></sub>](https://github.com/paradite)<br/>|[<img src="https://avatars.githubusercontent.com/u/3807955?v=4" width="100px;"/><br/><sub><b>BernardTolosajr</b></sub>](https://github.com/BernardTolosajr)<br/>|[<img src="https://avatars.githubusercontent.com/u/52845048?v=4" width="100px;"/><br/><sub><b>snapre</b></sub>](https://github.com/snapre)<br/>|
| :---: | :---: | :---: | :---: |


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Tue Nov 02 2021 23:20:50 GMT+0800`.

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
├── redux-saga       # redux-saga
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

