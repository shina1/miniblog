import React from 'react';
import { Button, Form, Input, Select, Checkbox ,Col, Row} from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

/* eslint-enable no-template-curly-in-string */

const FormComp: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
   <div className='w-[80%] lg:w-[50%] mr-auto ml-auto mt-10 mb-5 pb-5'>
     <Form  name="nest-messages" onFinish={onFinish} >
      <Form.Item name='title' label="Title" >
        <Input />
      </Form.Item>
      <Form.Item name='author' label="Author" >
        <Input />
      </Form.Item>
      <Form.Item name='category' label="Category" >
      <Select
      defaultValue="sports"
      style={{ width: 120 }}
      options={[
        {
          value: 'sports',
          label: 'Sports',
        },
        {
          value: 'anime',
          label: 'Anime',
        },
        {
          value: 'technology',
          label: 'Technology',
        },
      ]}
    />
      </Form.Item>
      <div className='flex flex-col gap-2  items-center'>
        <h4>Featured Post ?</h4>
        <div className='flex flex-row gap-5 items-center'>
          <Form.Item name='featured'>
            <Checkbox value="true">True</Checkbox>
          </Form.Item>
          <Form.Item>
            <Checkbox value="false">False</Checkbox>
          </Form.Item>
       </div>
      </div>
      <Form.Item name='link' label="Link">
        <Input />
      </Form.Item>
      <Form.Item name='content' label="Content">
        <Input.TextArea rows={30} showCount/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <button className='bg-[#FF7606]/80 text-white flex w-[50%] items-center justify-center gap-2 py-2 rounded-full border-none' >
          Submit
        </button>
      </Form.Item>
    </Form>
   </div>
  );
};

export default FormComp;

