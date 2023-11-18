import React, { memo,useEffect,useState } from 'react'
import {Form, Tooltip, Divider, Button, Spin,Input} from 'antd';
import  {HeartTwoTone, SmileTwoTone} from '@ant-design/icons';
import DocumentTitle from "react-document-title"; // 设置自己的网页标题
import { setUserInfoAction } from '@/store/actionCreator';
import './index.less'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const LoginView = memo(() => {
  const [form] = Form.useForm();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0)
  /**
   * @description 这里需要把用户信息塞到store中，未做，在想用不用rtk
   * @param {*} v 
   */
  const handleSubmit = (v) => {
    console.log(v,'v')
    nav('/home');
  }

  return (
    <DocumentTitle title={"用户登录"}>
      <div className="login-container">
        {num}
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
              label="用户"
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
                      <SmileTwoTone
                      twoToneColor="#00796B"
                      />
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
                      <HeartTwoTone
                      twoToneColor="#eb2f96"
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

const mapDispatchToProps = (dispatch) => ({
  setUserInfoHandle: (userInfo) => dispatch(setUserInfoAction(userInfo)),
})
export default connect(null, mapDispatchToProps)(LoginView);

