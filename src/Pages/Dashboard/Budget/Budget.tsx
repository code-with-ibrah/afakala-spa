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
import Table from "antd/es/table";
import Title from "antd/es/typography/Title";

import "./Budget.css";




const Budget = () => {


    // the switch slider at the top
    const switchHandler = (checked: boolean) => {
        console.log(checked);
    }


    // data for the table
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          quantity: 32,
          desc: '10 Downing Street',
          price: "website",
          total: 29.32
        },
        {
            key: '2',
            name: 'John',
            quantity: 83,
            desc: 'Fight for Power',
            price: "website",
            total: 29.32
        },
        {
            key: '3',
            name: 'Emmanuel',
            quantity: 223,
            desc: 'Fighting for freedom',
            price: "USSD",
            total: 29.32
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
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity',
        },
        {
          title: 'Desc',
          dataIndex: 'desc',
          key: 'desc',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
      ];

      




    type FieldType = {
        name?: string;
        quantity?: number;
        description?: string,
        price?: number,
        total?: number
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
        <DashboardContainer activeTab={1}>
            <div className="welcome-wrapper">
                <p className="user-name">Budget Planner!</p>

                <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <AndroidFilled className="icon" />

                    <Switch onChange={switchHandler} />

                </span>
            </div>






        {/* form */}
        <div className="income__form-wrapper">

            <Form
                name="basic"
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
                    label="Quantity"
                    name="quantity"
                    rules={[{ required: true, message: 'Please input your Quantity!' }]}>
                    <InputNumber
                    placeholder="18" 
                    style={{ width: "100%"}} />
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

                <Form.Item<FieldType>
                    label="Price"
                    name="price"
                    rules={[
                        {required: true, message: "Please fill this field"}
                    ]}>
                    <Input
                        placeholder="Please enter item price"
                    />
                </Form.Item>


                <Form.Item<FieldType>
                    label="Total"
                    name="total">
                    <Input
                        readOnly
                    />
                </Form.Item>


                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Add to Budget
                    </Button>
                </Form.Item>
            </Form>

        </div>







        {/* Table */}
        <div className="income__table-wrapper">
        <Title className="text-center text-white" level={5}>
            Budget for Jan 2023
        </Title>

            <Table 
                dataSource={dataSource} 
                columns={columns} 
            />
            
        </div>



        </DashboardContainer>
    </React.Fragment>
}

export default Budget;