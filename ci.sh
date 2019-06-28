#!/bin/bash

Xvfb -ac -screen scrn 1280x800x24 :99.0 &

npm i npm@6 -g --registry=https://registry.npm.taobao.org

npm i

npm run lint
npm run serve &
npm run test:antd

npm run reliable
