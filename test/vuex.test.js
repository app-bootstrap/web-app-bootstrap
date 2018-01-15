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

    it('page render should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/vuex`);
    });
  });
});
