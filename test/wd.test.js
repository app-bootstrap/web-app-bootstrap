'use strict';

import {
  webpackHelper
} from 'macaca-wd';

const {
  driver,
  BASE_URL
} = webpackHelper;

process.env.MACACA_WD_CLIENT_WAITFOR_TIMEOUT = 60 * 1000;
process.env.MACACA_WD_CLIENT_WAITFOR_POLL_FREQ = 3 * 1000;

describe('test/app-bootstrap.test.js', () => {
  describe('wait for element', () => {
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

    beforeEach(() => {
      return driver
        .getUrl(`${BASE_URL}/app-bootstrap`);
    });

    after(() => {
      return driver
        .openReporter(false)
        .quit();
    });

    it('should be ok', () => {
      return driver
        .waitForElementByCss('.main-title.red')
        .sleep(3000);
    });
  });
});

