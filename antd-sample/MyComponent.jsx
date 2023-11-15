import React from 'react';

import styles from './MyComponent.module.less';

export const MyComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.div}>
        <div className={styles.pZvKR}>
          <div className={styles.zTgKe}>
            <span className={styles.span}>数据总览</span>
            <span className={styles.qJDnm}>你的每一份成长都记录</span>
          </div>
          <div className={styles.kBVol}>近 1 年</div>
        </div>
        <div className={styles.xEqUH}>
          <div className={styles.xYuOG}>
            <span className={styles.vHYtO}>创作天数</span>
            <span className={styles.fCtBp}>160</span>
          </div>
          <div className={styles.xYuOG}>
            <span className={styles.vHYtO}>创作字数</span>
            <span className={styles.fCtBp}>14,385</span>
          </div>
          <div className={styles.oSVrf}>
            <span className={styles.jlPlf}>内容更新</span>
            <span className={styles.aAiBx}>1,807</span>
          </div>
          <div className={styles.oSVrf}>
            <span className={styles.jlPlf}>获得点赞</span>
            <span className={styles.aAiBx}>413</span>
          </div>
        </div>
      </div>
    </div>
  );
};
