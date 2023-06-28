import React from 'react'
import {Row , Col , Form , Input} from 'antd'
import {Link} from "react-router-dom"
import {useDispatch} from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
function Login() {
    const dispatch = useDispatch()
    function onFinish(values){
        dispatch(userLogin(values))
        console.log(values)

    }
    return (
        <div classname='Login'>
           <Row gutter={16} className='d=flex align-items-center'>

               <Col lg={16} style={{position :'relative'}}>
                   <img alt="bicycle" src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                   <h1 className='login-logo'>PEDALPAL</h1>
               </Col>
            
               <Col lg={8} className='text-left p-5'>
                   <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
                       <h1>Login</h1>
                       <hr />

                       <Form.Item name='username' label='Username' rules={[{required: true}]}>
                           <Input/>

                       </Form.Item>
                       <Form.Item name='password' label='Password' rules={[{required: true}]}>
                           <Input/>

                       </Form.Item>

                       <button className='btn1 mt-2 mb-3'>Login</button>
                       <hr />

                       <Link to='/register'>Click Here to Register</Link>

                      

                    </Form>
               </Col>
                

           </Row>
        </div>
    )
}

export default Login