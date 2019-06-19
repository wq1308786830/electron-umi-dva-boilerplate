import { Button, Popconfirm, Table } from 'antd';

const ProductList = ({ onDelete, onPrint, products }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
    {
      title: 'Print Action',
      render: (text, record) => {
        return (
          <Button onClick={() => onPrint(record.fileUrl)}>Print</Button>
        );
      },
    },
  ];
  return <Table rowKey={record => record.id} dataSource={products} columns={columns}/>;
};

export default ProductList;
