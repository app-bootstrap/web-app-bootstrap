'use strict';

const {
  webUtils
} = require('marmot-cli/helper');

const testResult = require('./reports/json-final');
const coverageResult = require('./coverage/coverage-final');
const {
  lines
//  statements,
//  functions,
//  branches
} = webUtils.summarizedCoverage(coverageResult);
const {
  tests,
  passes,
  passPercent
} = testResult.stats;
const {
  tests,
  passes,
  passPercent
} = testResult.stats;

const res = {
  files: [
    'coverage',
    'reports',
    'screenshots'
  ],
  packages: [
  ],
  testInfo: {
    tests,
    passes,
    passPercent,
    linePercent: lines.pct,
    testHtmlReporterPath: 'reports/index.html',
    coverageHtmlReporterPath: 'coverage/index.html'
  },
  extraInfo: {
    'marmot-cli': require.resolve('marmot-cli').match(/\d+.\d+.\d+/)[0],
    'macaca-wd': require.resolve('macaca-wd').match(/\d+.\d+.\d+/)[0],
    'vue-version': require.resolve('macaca-wd').match(/\d+.\d+.\d+/)[0]
  }
};

console.log(JSON.stringify(res, null, 2));

module.exports = res;
