/* eslint no-underscore-dangle: [1, { "allow": ["_id"] }] */
/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/control-has-associated-label */
import React, {
  FC, useState, FormEvent, ChangeEvent,
} from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
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
import { useStudentManager } from '../hooks/useStudentManager';

interface Item {
  key: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  blacklisted: boolean;
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
  return (
    <td className={className}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          label={dataIndex}
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
  const { students, addStudent, deleteStudent } = useStudentManager();
  const [studentData, setStudentData] = useState({
    firstName: '',
    lastName: '',
  });
  const [form] = Form.useForm();
  const [data, setData] = useState(
    students.map((item) => ({
      key: item._id.toString(),
      firstName: item.firstName,
      lastName: item.lastName,
      blacklisted: false,
      createdAt: item.createdAt,
    })),
  );
  const [editingKey, setEditingKey] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [openPdf, setOpenPdf] = useState(false);
  const showModal = (
    state: boolean,
    func: { (value: React.SetStateAction<boolean>): void },
  ) => {
    func(!state);
  };
  const handleCancel = (func: {
    (value: React.SetStateAction<boolean>): void;
  }) => {
    func(false);
  };
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
    const deleteData = students
      .map((item) => item)
      .filter((item) => item._id.toString() === key);
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
    deleteStudent(deleteData[0]);
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      width: '15%',
      editable: true,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      width: '15%',
      editable: true,
    },
    {
      title: 'status',
      dataIndex: 'blacklisted',
      width: '10%',
      editable: true,
      render: (status: boolean) => (status ? <span> Blacklisted </span> : <span> Not blacklisted</span>),
    },
    {
      title: 'Department',
      dataIndex: 'department',
      width: '20%',
      editable: true,
    },
    {
      title: 'Date Created',
      dataIndex: 'createdAt',
      width: '10%',
      editable: true,
      render: (date: Date) => {
        const dayOfWeek: {
          0: string;
          1: string;
          2: string;
          3: string;
          4: string;
          5: string;
          6: string;
        } = {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: 'Friday',
          6: 'Saturday',
        };
        return (
          <span>
            {`
      ${dayOfWeek[date.getUTCDay() as keyof typeof dayOfWeek]}, 
      ${date.getUTCMonth() + 1} 
      ${date.getUTCFullYear()}`}
          </span>
        );
      },
    },
    // {
    //   title: 'Last Modified',
    //   dataIndex: 'addr',
    //   width: '10%',
    //   editable: true,
    // },
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
              aria-label="Edit"
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

  const handleAddStudent = (event: FormEvent) => {
    event.preventDefault();
    addStudent(studentData.firstName, studentData.lastName);
  };

  const handleAddStudentForm = (event: ChangeEvent<HTMLInputElement>) => {
    setStudentData({
      ...studentData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Heading headingType="page" title="student Management" />
      <div className="flex justify-between">
        <div className="flex items-center">
          {' '}
          <SearchIcon color="stroke-primaryColor" />
          <input placeholder="Search students" />
        </div>
        <div className="flex gap-5">
          <button
            type="button"
            className="flex items-center"
            onClick={() => showModal(openForm, setOpenForm)}
          >
            {' '}
            <AddIcon color="fill-primaryColor" />
            Add Student
            {' '}
          </button>
          <button
            type="button"
            className="flex items-center"
            onClick={() => showModal(openPdf, setOpenPdf)}
          >
            {' '}
            <DownloadIcon color="fill-primary" />
            {' '}
            View student Report
          </button>
        </div>
      </div>
      <Modal open={openPdf} onCancel={() => handleCancel(setOpenPdf)}>
        <PDFViewer>
          <MyDocument />
        </PDFViewer>
      </Modal>
      <Modal open={openForm} onCancel={() => handleCancel(setOpenForm)}>
        <div>
          <h2> Add student </h2>
          <Form>
            <Form.Item label="First Name" htmlFor="firstName">
              First Name
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={studentData.firstName}
                onChange={handleAddStudentForm}
              />
            </Form.Item>
            <label htmlFor="lastName">
              Last Name
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={studentData.lastName}
                onChange={handleAddStudentForm}
              />
            </label>
            <button type="submit" onClick={handleAddStudent}>
              {' '}
              Submit
              {' '}
            </button>
          </Form>
        </div>
      </Modal>
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
    </div>
  );
};

export default Students;
