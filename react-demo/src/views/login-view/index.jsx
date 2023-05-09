import React, { memo,useState } from 'react'
import {Form, Tooltip, Divider, Button, Spin,Input} from 'antd';
import  Icon from '@ant-design/icons';
import DocumentTitle from "react-document-title"; // 设置自己的网页标题
import './index.less'
import { useNavigate } from 'react-router-dom';
export default memo(() => {
  const [form] = Form.useForm();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    nav('/table');
  }
  return (
    <DocumentTitle title={"用户登录"}>
      <div className="login-container">
        <Form 
          form = {form} 
          onFinish={handleSubmit} 
          className="content"
          initialValues={{
            username: "admin",
            password: "iamsocool"
          }}
        >
          <div className="title">
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading} tip="登录中...">
            <Form.Item
              name="username"
              label="用户名"
              rules ={[
                {
                  required: true,
                  whitespace: true,
                  message: "请输入用户名",
                },
            ]}
            >
              {/* <Tooltip
                trigger={["focus"]} // 输入聚焦的时候会持续触发
                placement="topLeft"
                title="let me tell u how to log in!"
              > */}
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="用户名"
                    // onBlur={handlerUserOnBlur}
                  />
              {/* </Tooltip> */}
            </Form.Item>
            {/* 密码输入 */}
            <Form.Item
                name="password"
                label="密码"
                rules ={[
                {
                    required: true,
                    whitespace: true,
                    message: "请输入密码",
                },
                ]}
            >
              {/* <Tooltip
                trigger={["focus"]} // 输入聚焦的时候会持续触发
                placement="topLeft"
                title="密码随便填！"
              > */}
                  <Input
                    prefix={
                      <Icon
                        type="lock"
                        style={{ color: "rgba(0,0,0,.25)" }}
                        //  onBlur={}
                      />
                    }
                    type="password"
                    placeholder="密码"
                  />
              {/* </Tooltip> */}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>

            {/* 登录下面的提示信息 */}
            <Divider>Tips</Divider>
            <Form.Item>
              <span>账号 : admin </span>
              <br />
              <span>密码 : iamsocool</span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  )
})

