import React, {useEffect, useState} from "react";
import './home.css';
import {Row,Form,Button,Alert} from "react-bootstrap";
import axios from "axios";

import Lib from '../assets/lib.jpg';
import {useNavigate} from "react-router-dom";

export function Signup(props) {

    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem("user")){
            navigate('/')
        }
    })

    const [email,onChangeEmail] = useState("")
    const [password,onChangePassword] = useState("")
    const [flag,onChangeFlag] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        const loginDetails = {
            username: email,
            password: password
        }

        axios.post('http://localhost:4000/login',loginDetails)
        .then(res => {
            if(res.data !== "Login Page"){
                localStorage.setItem("user",JSON.stringify({username: res.data.username}))
                window.location.reload()
            }else{
                onChangeFlag(true)
            }
        })
    }

    const alert = () => {
        if(flag){        
            return(
                <Alert variant="danger" onClose={() => onChangeFlag(false)} style={{textAlign:"center"}} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        "Invalid username or password"
                    </p>
                </Alert>
            )
            
        }else{
            return <div></div>
        }
    } 

        return(
            <div>
                <Row>
                    <div className={"col-5"} style={{'background-color':'#1C3879','height':'100vh','text-align':'center','border-bottom-right-radius':'100px'}}>
                        <h1 className={"title mt-5"}>Book Hub</h1>
                        <h2 className={"title2"} style={{'color':'#F9F5EB'}}>Library Management System</h2>

                        <img src={Lib} className={'mt-4 mb-4'} alt="Library" style={{'width':'80%','border-bottom-right-radius':'50px','border-top-left-radius':'50px'
                        ,'border':'5px solid #607EAA','pointerEvents':'none'}}/>

                        <h1 className={"mt-lg-4 title"}>Welcome Back!</h1>
                    </div>
                    <div className={'col-7'} >
                        <div style={{'text-align':'center'}}>
                            <h1 className={'title'} style={{'color':'#277BC0','-webkit-text-stroke': '3px #1C3879','margin-top':'50px'}}>Login</h1>
                            <h2 className={'title2 mt-5'} style={{'font-size':'50px'}}>Welcome Back! Please Login Your Account</h2>
                        </div>
                        {alert()}
                        <Form onSubmit={onSubmit} style={{'width':'500px','margin':'0 auto','margin-top':'60px'}}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control  value={email} onChange={(e) => onChangeEmail(e.target.value)}  type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  value={password} onChange={(e) => onChangePassword(e.target.value)}  type="password" placeholder="Password" />
                            </Form.Group>
                            <div style={{'text-align':'center'}}>
                                <Button variant="primary" type={'submit'} size={'lg'} style={{'width':'150px','margin-top':'60px'}}>Login</Button>
                            </div>
                        </Form>
                    </div>
                </Row>
            </div>
        )
}