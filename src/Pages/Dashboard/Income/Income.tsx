import React from "react";
import DashboardContainer from "../../../Components/Common/Page/Dashboard/DashboardContainer";
import { AndroidFilled } from "@ant-design/icons";
import { Switch } from "antd";

import Button from 'antd/es/button';
import Checkbox from 'antd/es/checkbox';
import Form from 'antd/es/form';
import { FormProps } from 'antd/es/form/Form';
import Input from 'antd/es/input';
import InputNumber from "antd/es/input-number";
import TextArea from "antd/es/input/TextArea";

import "./Income.css";
import Table from "antd/es/table";
import Title from "antd/es/typography/Title";


const Income = () => {


    // the switch slider at the top
    const switchHandler = (checked: boolean) => {
        console.log(checked);
    }





    // data for the table
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          amount: 32,
          desc: '10 Downing Street',
          source: "website",
          date: "25-06-2023"
        },
        {
            key: '2',
            name: 'John',
            amount: 83,
            desc: 'Fight for Power',
            source: "website",
            date: "13-03-2012"
        },
        {
            key: '3',
            name: 'Emmanuel',
            amount: 223,
            desc: 'Fighting for freedom',
            source: "USSD",
            date: "03-03-2025"
          },
      ];
      

      // columns for the table
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: 'Desc',
          dataIndex: 'desc',
          key: 'desc',
        },
        {
            title: 'Source',
            dataIndex: 'source',
            key: 'source',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
      ];

      




    type FieldType = {
        name?: string;
        amount?: number;
        description?: string,
        source?: string,
        date?: string
    };



    // form validated submission 
    const onFinish: FormProps<FieldType>['onFinish'] = (data) => {
        console.log('Success:', data);
    };

    
    // form validation failed submission
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };






    return <React.Fragment>
        <DashboardContainer>
            <div className="welcome-wrapper">
                <p className="user-name">Income Monitor!</p>

                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <AndroidFilled className="icon" />

                    <Switch onChange={switchHandler} />

                </span>
            </div>






        {/* form */}
        <div className="income__form-wrapper">

            <Form
                name="basic"
                
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                // style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">

                <Form.Item<FieldType>
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your Name!' }]}>
                    <Input placeholder="John Smith" />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Amount"
                    name="amount"
                    rules={[{ required: true, message: 'Please input your Amount!' }]}>
                    <InputNumber
                    placeholder="3972.53" 
                    min={0.1} 
                    style={{ width: "100%"}} />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Source"
                    name="source"
                    rules={[
                        {required: true, message: "Please fill this field"}
                    ]}>
                    <Input
                        placeholder="Source"
                    />
                </Form.Item>


                <Form.Item<FieldType>
                    label="Date"
                    name="date"
                    rules={[
                        {required: true, message: "Please fill this field"}
                    ]}>
                    <Input type="date" />
                </Form.Item>


                <Form.Item<FieldType>
                    label="Description"
                    name="description"
                    rules={[
                        {required: true, message: 'Please fill the description'},
                        {min: 4, message: "Characters should be at least 4"},
                    ]} >

                    <TextArea
                        rows={4}
                        placeholder="Please input your Description"
                        allowClear
                    />
                </Form.Item>



                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Add to income stream
                    </Button>
                </Form.Item>
            </Form>

        </div>







        {/* Table */}
        <div className="income__table-wrapper">
        <Title className="text-center text-white" level={5}>Income History</Title>

            <Table 
                dataSource={dataSource} 
                columns={columns} 
            />
            
        </div>






 







        </DashboardContainer>
    </React.Fragment>
}

export default Income;