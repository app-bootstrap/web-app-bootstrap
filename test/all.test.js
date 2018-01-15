'use strict';

import {
  driver,
  BASE_URL
} from './helper';

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

    it('vuex render should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/vuex`);
    });

    it('redux render should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/redux`);
    });

    it('flux render should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/flux`);
    });

    it('mobx render should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/mobx`);
    });
  });
});
