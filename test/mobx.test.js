'use strict';

import {
  webpackHelper
} from 'macaca-wd';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/mobx.test.js', () => {
  describe('page func testing', () => {
    before(() => {
      return driver
        .initWindow({
          platformName: 'playwright',
          browserName: 'chromium',
          width: 800,
          height: 600,
          deviceScaleFactor: 2
        });
    });

    afterEach(function () {
      return driver
        .coverage()
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .openReporter(true)
        .quit();
    });

    it('render should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/mobx`);
    });
  });
});

