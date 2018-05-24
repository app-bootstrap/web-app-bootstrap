'use strict';

import {
  webpackHelper
} from 'macaca-wd';

const {
  driver,
  BASE_URL
} = webpackHelper;

describe('test/vuex.test.js', () => {
  describe('page func testing', () => {
    before(() => {
      return driver
        .initWindow({
          width: 800,
          height: 600,
          deviceScaleFactor: 2
        });
    });

    beforeEach(() => {
      return driver
        .getUrl(`${BASE_URL}/vuex`);
    });

    afterEach(function () {
      return driver
        .coverage()
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .openReporter(false)
        .quit();
    });

    it('setValue vs formatInput', () => {
      return driver
        .elementByCss('#new-todo')
        .formatInput(`input by formatInput ${Date.now()}`)
        .elementByCss('#new-todo')
        .keyboardEvent('keyUp', 13)
        .sleep(3000)
        .elementByCss('#new-todo')
        .clear()
        .sendKeys(`input by sendKeys ${Date.now()}`)
        .elementByCss('#new-todo')
        .keyboardEvent('keyUp', 13)
        .sleep(3000);
    });
  });
});

