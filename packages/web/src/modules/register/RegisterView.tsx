import React from "react";
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import './register.css';

export class RegisterView extends React.PureComponent {
    onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    render () {
        return (
            <div id="components-form-demo-normal-login">
                <Form
                    name="normal_login"
                    // @ts-ignore
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        // @ts-ignore
                        name="username"
                        rules={[{required: true, message: 'Please input your Username!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        // @ts-ignore
                        name="password"
                        rules={[{required: true, message: 'Please input your Password!'}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            // @ts-ignore
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="#!">
                            Forgot password
                        </a>
                    </Form.Item>
                    {/* @ts-ignore */}
                    <Form.Item>
                        <div>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Register Now
                            </Button>
                            Or <a href="#!">Login</a>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
