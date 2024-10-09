import { Button,  Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../../redux/api/authApi';
import { useEffect } from 'react';


const Register = () => {
  const [register, {isLoading, isSuccess, data}] = useRegisterMutation()
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values);
    register(values)
  };

  useEffect(() => {
    if(isSuccess && data) {
      message.success("Register Success")
      navigate("/auth")
    }
  }, [isSuccess, data])
  
  
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <div className='w-full max-w-[400px] bg-white  rounded-md shadow-cm p-10'>
    <h1 className='text-center text-2xl font-bold'>Register</h1>
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    layout='vertical'
    initialValues={{ remember: true }}
    onFinish={onFinish}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Age"
      name="age"
      rules={[{ required: true, message: 'Please input your age!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    

    <Form.Item wrapperCol={{ span: 24 }}>
      <Button loading={isLoading} disabled={isLoading} type="primary" htmlType="submit" className='w-full'>
        Register
      </Button>
    </Form.Item>
  </Form>
  <p className='text-center mt-5'>Already have an account? <Link to="/auth" className='text-blue-500'>Login</Link></p>
    </div>
  </div>
  )
};

export default Register;