import { connect } from 'dva';
import React from 'react';
import styles from './products.css';
import ProductList from '@/components/ProductList';
import { Link } from 'umi';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  render() {
    const { products } = this.props;
    return (
      <div className={styles.normal}>
        <h2>List of Products</h2>
        <ProductList onDelete={this.handleDelete} products={products}/>
        <Link to={'/'}>返回首页</Link>
      </div>
    );
  }
}

export default connect(({ products }) => ({
  products,
}))(Products);
