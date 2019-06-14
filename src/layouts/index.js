import React from 'react';
import styles from './index.less';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <header onClick={window.history.goBack}>返回</header>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
