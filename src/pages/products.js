import { connect } from 'dva';
import React from 'react';
import styles from './products.css';
import ProductList from '@/components/ProductList';
import { Link } from 'umi';
import { Button } from 'antd';

const { ipcRenderer } = window.require('electron');

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleDelete = this.handleDelete.bind(this);
    this.printFile = this.printFile.bind(this);
  }

  componentDidMount() {
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg); // prints "pong"
    });
  }

  handleDelete(id) {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  printFile() {
    let printInfo = {
      //pdfUrl是网络PDF文件的地址
      pdf: '/Users/russell/Desktop/Tower--产前筛查管理系统sy3.0.3-3.pdf',
    };
    ipcRenderer.send('print', printInfo);
  }

  render() {
    const { products } = this.props;
    return (
      <div className={styles.normal}>
        <h2>List of Products</h2>
        <Button onClick={this.printFile}>打印</Button>
        <ProductList onDelete={this.handleDelete} products={products}/>
        <Link to={'/'}>返回首页</Link>
      </div>
    );
  }
}

export default connect(({ products }) => ({
  products,
}))(Products);
