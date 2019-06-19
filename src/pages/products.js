import { Link } from 'umi';
import { connect } from 'dva';
import React from 'react';
import ProductList from '@/components/ProductList';
import styles from './products.less';

const { ipcRenderer } = window.require('electron');

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.ipcRenderer = ipcRenderer;
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

  printFile(fileUrl) {
    let printInfo = {
      //pdfUrl是网络PDF文件的地址
      pdf: fileUrl,
    };
    this.ipcRenderer.send('print', printInfo);
  }

  render() {
    const { products } = this.props;
    return (
      <div className={styles.normal}>
        <Link to={'/'}>&lt;&nbsp;返回</Link>
        <h2>List of Products</h2>
        <ProductList onDelete={this.handleDelete} onPrint={this.printFile} products={products}/>
      </div>
    );
  }
}

export default connect(({ products }) => ({
  products,
}))(Products);
