import React, { FC, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import {
  Form, Input, InputNumber, Popconfirm, Table, Typography,
} from 'antd';
import { Heading } from '../components/atoms';
import { MyDocument } from '../components/molecules';
import {
  DeleteIcon,
  SaveIcon,
  CancelIcon,
  EditIcon,
  DownloadIcon,
  SearchIcon,
  AddIcon,
} from '../assets/icons';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i += 1) {
  originData.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: 'number' | 'text';
  //   record?: Item;
  //   index?: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  // ...restProps,
  className,
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  // console.log(restProps)
  return (
    <td className={className}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const Students: FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log(errInfo);
    }
  };

  const handleDelete = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: 'Last Name',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      width: '20%',
      editable: true,
    },
    {
      title: 'status',
      dataIndex: 'address',
      width: '10%',
      editable: true,
    },
    {
      title: 'Date Created',
      dataIndex: 'address',
      width: '10%',
      editable: true,
    },
    {
      title: 'Last Modified',
      dataIndex: 'address',
      width: '10%',
      editable: true,
    },
    {
      title: 'actions',
      dataIndex: 'actions',
      width: '15%',
      render: (_: [], record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              <SaveIcon color="fill-primaryColor" />
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <button type="button">
                <CancelIcon color="fill-primaryColor" />
              </button>
            </Popconfirm>
          </span>
        ) : (
          <div className="flex gap-3">
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.key)}
            >
              <button type="button">
                <DeleteIcon color="fill-primaryColor" />
              </button>
            </Popconfirm>
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
            >
              <EditIcon color="stroke-black" />
            </Typography.Link>
          </div>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      <Heading headingType="page" title="student Management" />
      <div className="flex justify-between">
        <p>
          {' '}
          <SearchIcon color="stroke-primaryColor" />
          {' '}
          Search
          {' '}
        </p>
        <div className="flex gap-5">
          <p>
            {' '}
            <AddIcon color="fill-primaryColor" />
            Add Student
            {' '}
          </p>
          <p>
            {' '}
            <DownloadIcon color="fill-primary" />
            {' '}
            Download student list
          </p>
        </div>
      </div>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default Students;
