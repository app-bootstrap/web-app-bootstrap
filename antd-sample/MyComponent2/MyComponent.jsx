import React from 'react';

import styles from './MyComponent.module.less';

export const MyComponent = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.span}>个人知识创作</span>
      <div className={styles.div} />
      <div className={styles.divDep3_1}>478W</div>
      <div className={styles.divDep3_2}>总字数</div>
      <div className={styles.divDep3_3} />
      <div className={styles.divDep3_4}>3,779</div>
      <div className={styles.divDep3_5}>文档</div>
      <div className={styles.divDep3_6} />
      <div className={styles.divDep3_7}>172</div>
      <div className={styles.divDep3_8}>知识库</div>
      <div className={styles.divDep3_9} />
      <div className={styles.divDep3_10}>1,607</div>
      <div className={styles.divDep3_11}>小记</div>
    </div>
  );
};
