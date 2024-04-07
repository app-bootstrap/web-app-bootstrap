import React from 'react';
import {
  DeleteColumnOutlined,
  ForkOutlined,
  HolderOutlined,
  LaptopOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import styles from './index.module.less';

export const MyComponent = () => {
  const spanText = 'Pinned';
  const aText = 'Customize pins';
  const spanText2 = 'ios-app-bootstrap';

  // 按钮处理函数
  const onButtonClick = e => {};
  const spanText3 = 'A starting tutorial for iOS application with Swift.';
  const spanText4 = 'Swift';
  const spanText5 = '39';
  const spanText6 = '2o';
  const spanText7 = '17';
  const spanText8 = 'android-app-bootstrapPublic';
  const spanText9 = 'A starting tutorial for Android application.';
  const spanText10 = 'Java';
  const spanText11 = '27';
  const spanText12 = '9';

  return (
    <div className={styles.wrapper}>
      <div className={styles.div}>
        <div className={styles.divDep4L1}>
          <span className={styles.span}>{spanText}</span>
          <a className={styles.a}>{aText}</a>
        </div>
        <div className={styles.divDep4L2}>
          <div className={styles.divDep5L1}>
            <div className={styles.divDep6L1}>
              <div className={styles.divDep7L1}>
                <div className={styles.divDep8L1}>
                  <DeleteColumnOutlined className={styles.deleteColumnIcon} />
                  <span className={styles.spanDep9L1}>{spanText2}</span>
                  <Button
                    size="small"
                    onClick={onButtonClick}
                    className={styles.button}
                  >
                    Public
                  </Button>
                  <HolderOutlined className={styles.holderIcon} />
                </div>
                <span className={styles.spanDep8L1}>{spanText3}</span>
                <div className={styles.divDep8L2}>
                  <div className={styles.divDep9L1} />
                  <span className={styles.spanDep9L2}>{spanText4}</span>
                  <StarOutlined className={styles.starIcon} />
                  <span className={styles.spanDep9L3}>{spanText5}</span>
                  <span _fecodex_fontSize className={styles.spanDep9L4}>
                    <ForkOutlined className={styles.forkIcon} />
                    {spanText6}
                  </span>
                  <span className={styles.spanDep9L5}>{spanText7}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divDep5L2}>
            <div className={styles.divDep6L2}>
              <div className={styles.divDep7L2}>
                <div className={styles.divDep8L3}>
                  <div className={styles.divDep9L2}>
                    <LaptopOutlined className={styles.laptopIcon} />
                    <span className={styles.spanDep10L1}>{spanText8}</span>
                  </div>
                  <span className={styles.spanDep9L6}>{spanText9}</span>
                  <div className={styles.divDep9L3}>
                    <div className={styles.divDep10L1} />
                    <span className={styles.spanDep10L2}>{spanText10}</span>
                    <StarOutlined className={styles.starIconDep10L1} />
                    <span className={styles.spanDep10L3}>{spanText11}</span>
                    <ForkOutlined className={styles.forkIconDep10L1} />
                    <span className={styles.spanDep10L4}>{spanText12}</span>
                  </div>
                </div>
                <HolderOutlined className={styles.holderIconDep8L1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
