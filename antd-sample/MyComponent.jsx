import React from 'react';

import styles from './MyComponent.module.less';

export const MyComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.div}>
        <span className={styles.span}>个人知识创作</span>
        <div className={styles.divDep4_1}>
          <div className={styles.divDep5_1}>
            <span className={styles.spanDep6_1}>478W</span>
            <span className={styles.spanDep6_2}>总字数</span>
          </div>
          <div className={styles.divDep5_2}>
            <div className={styles.divDep6_1}>
              <span className={styles.spanDep7_1}>3,779</span>
              <span className={styles.spanDep7_2}>文档</span>
            </div>
            <div className={styles.divDep6_2}>
              <span className={styles.spanDep7_3}>172</span>
              <span className={styles.spanDep7_4}>知识库</span>
            </div>
          </div>
        </div>
        <div className={styles.divDep4_2}>
          <div className={styles.divDep5_3}>
            <span className={styles.spanDep6_3}>1,607</span>
            <span className={styles.spanDep6_4}>小记</span>
          </div>
          <div className={styles.divDep5_4}>
            <div className={styles.divDep6_3}>
              <span className={styles.spanDep7_5}>小记</span>
            </div>
            <div className={styles.divDep6_4}>
              <span className={styles.spanDep7_6}>1</span>
              <span className={styles.spanDep7_7}>1000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
