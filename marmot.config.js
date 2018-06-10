'use strict';

const {
  webUtils,
  getDepsPkgVersion,
} = require('marmot-cli/lib/helper');

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
    'marmot-cli': getDepsPkgVersion('marmot-cli'),
    'macaca-wd': getDepsPkgVersion('macaca-wd'),
    'vue': getDepsPkgVersion('vue')
  }
};

console.log(JSON.stringify(res, null, 2));

module.exports = res;
