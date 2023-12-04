/* eslint no-underscore-dangle: [1, { "allow": ["_id"] }] */
/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/control-has-associated-label */
import React, {
  FC, useState, ChangeEvent, useEffect,
} from 'react';
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Avatar,
} from 'antd';
import { Heading, Button } from '../components/atoms';
import { MyDocument } from '../components/molecules';
import {
  DeleteIcon,
  SaveIcon,
  CancelIcon,
  EditIcon,
  SearchIcon,
  AddIcon,
  ViewReportIcon,
} from '../assets/icons';
import { useStudentManager } from '../hooks/useStudentManager';

interface Item {
  key: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  blacklisted: boolean;
  department: string;
  profilePic: string;
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
    department: '',
    profilePic: '',
  });
  const [form] = Form.useForm();
  const [data, setData] = useState<
  {
    key: string;
    firstName: string;
    lastName: string;
    department: string;
    profilePic: string;
    blacklisted: boolean;
    createdAt: Date;
  }[]
  >([]);
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
      title: '',
      dataIndex: 'profilePic',
      width: '5%',
      editable: false,
      render: (imageUrl: string) => <Avatar src={imageUrl} size="small" />,
    },
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

  const handleAddStudent = () => {
    addStudent(studentData);
    setOpenForm(false);
  };

  const handleAddStudentForm = async (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (event.target.type === 'file') {
      const formData = new FormData();
      const file = (event.currentTarget as HTMLInputElement).files;
      if (file) {
        formData.append('file', file[0]);
        formData.append('upload_preset', import.meta.env.VITE_PRESET_KEY);
        formData.append('cloud_name', import.meta.env.VITE_CLOUD_NAME);
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUD_NAME
          }/image/upload`,
          {
            method: 'post',
            body: formData,
          },
        );
        const imageUrl = await response.json();
        setStudentData({
          ...studentData,
          [event.target.name]: imageUrl.url,
        });
      }
    } else {
      setStudentData({
        ...studentData,
        [event.target.name]: event.target.value,
      });
    }
  };

  useEffect(() => {
    setData(
      students.map((item) => ({
        key: item._id.toString(),
        firstName: item.firstName,
        lastName: item.lastName,
        department: item.department,
        profilePic: item.profilePic,
        blacklisted: false,
        createdAt: item.createdAt,
      })),
    );
  }, [students]);
  return (
    <div className="space-y-6">
      <Heading headingType="page" title="student Management" />
      <div className="flex items-center justify-between">
        <div className="m-0 flex h-6 items-center gap-2 rounded bg-white">
          {' '}
          <SearchIcon color="stroke-primaryColor" className="w-4" />
          <input placeholder="Search students" />
        </div>
        <div className="flex gap-5">
          <Button
            variant="iconButton"
            Icon={<AddIcon color="fill-primaryColor" />}
            text="Add Student"
            onClick={() => showModal(openForm, setOpenForm)}
          />
          <Button
            variant="iconButton"
            Icon={<ViewReportIcon color="fill-primary" />}
            text="View Report"
            onClick={() => showModal(openPdf, setOpenPdf)}
          />
        </div>
      </div>
      <Modal
        footer={null}
        className="w-full"
        open={openPdf}
        onCancel={() => handleCancel(setOpenPdf)}
      >
        <MyDocument data={data} />
      </Modal>
      <Modal
        open={openForm}
        className="w-[90%]"
        onCancel={() => handleCancel(setOpenForm)}
        footer={[
          <Button
            text="Submit"
            className="m-4 px-6 py-2"
            key="submit"
            onClick={() => handleAddStudent()}
          />,
          <Button
            text="Cancel"
            key="cancel"
            className="bg-dangerColor px-6 py-2"
            onClick={() => handleCancel(setOpenForm)}
          />,
        ]}
      >
        <div className="space-y-6">
          <h2> Add student </h2>
          <Form className="flex flex-col items-center gap-4">
            <label htmlFor="profilePic">
              <input
                type="file"
                name="profilePic"
                onChange={handleAddStudentForm}
              />
            </label>
            <label htmlFor="lastName">
              First Name
              <Input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={studentData.firstName}
                onChange={handleAddStudentForm}
              />
            </label>
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
            <label htmlFor="department" className="flex flex-col">
              Department
              <select
                name="department"
                onChange={(event) => handleAddStudentForm(event)}
              >
                <option value="">--Please choose an option--</option>
                <option value="engineering">Engineering</option>
                <option value="creativeArt">Creative Arts</option>
                <option value="medicine">Medicine</option>
              </select>
            </label>
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
