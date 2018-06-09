#!/bin/bash

npm i npm@6 -g --registry=https://registry.npm.taobao.org

npm i

npm run ci:travis

npm run marmot
