'use strict';

const {
  webUtils,
  getDepsPkgVersion,
} = require('reliable-cli/lib/helper');

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

const res = {
  files: [
    'coverage',
    'reports',
    'screenshots',
    'dist',
    'index.html'
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
    'reilable-cli': getDepsPkgVersion('reilable-cli'),
    'macaca-wd': getDepsPkgVersion('macaca-wd'),
    'vue': getDepsPkgVersion('vue')
  }
};

console.log(JSON.stringify(res, null, 2));

module.exports = res;
