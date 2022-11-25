import React, {useState,useEffect} from "react";
import axios from "axios";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Navbar,Nav,Container,Form,Button,Alert} from "react-bootstrap";
import {Link, useLocation,useNavigate} from "react-router-dom";

import addLogo from "../assets/add.png";
import searchLogo from "../assets/search.png";
import issueLogo from "../assets/borrow.png";
import deleteLogo from "../assets/delete.png";
import returnLogo from "../assets/return.png";
import userLogo from "../assets/user.png";
import logoutLogo from "../assets/logout.png";
import bookShelf from "../assets/bookshelf.png";
import info from "../assets/info.png";
import settings from "../assets/settings.png";
import profile from "../assets/profile.png";
import home from "../assets/home.png";
import searchMemberLogo from "../assets/searchMember.png";


export function EditMember(props) {

    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("user")){
            navigate('/login')
        }
    })

    const handleClick = () => {
        localStorage.removeItem("user");
        navigate('/login')
    }

    const prevNIC = useLocation().state.nic;
    const prevName = useLocation().state.name;
    const prevAddress = useLocation().state.address;
    const prevContact = useLocation().state.contact;
    const prevEmail = useLocation().state.email;
    const prevGender = useLocation().state.gender;

    const [nic,onChangeNIC] = useState(prevNIC);
    const [name,onChangeName] = useState(prevName);
    const [email,onChangeEmail] = useState(prevEmail);
    const [gender,onChangeGender] = useState(prevGender);
    const [address,onChangeAddress] = useState(prevAddress);
    const [contact,onChangeContact] = useState(prevContact);
    let [msg, setMsg] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault()
        const memberObject = {
            nic: nic,
            name: name,
            email: email,
            gender: gender,
            address: address,
            contact: contact
        };
        axios.post('http://localhost:4000/library/edit-member', memberObject)
            .then(res => setMsg(res.data.msg));
    }

    const alert = () => {
        if(msg !== ''){
            if(msg === "Member not Updated!"){
                return(
                    <Alert variant="danger" onClose={() => setMsg('')} dismissible>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                            {msg}
                        </p>
                    </Alert>
                )
            }else{
                return(
                    <Alert variant="success" onClose={() => setMsg('')} dismissible>
                        <Alert.Heading>{msg}</Alert.Heading>
                    </Alert>
                )
            }
        }else{
            return <div></div>
        }
    }

        return (
            <div>
                <Row>
                    <div className={"col-5"} style={{'background-color':'#1C3879','text-align':'center','border-bottom-right-radius':'100px'}}>
                        <h1 className={"title mt-5"}>Book Hub</h1>
                        <p className={"text h3"}>Welcome back to the library.</p>
                        <Row style={{'margin-top': '4rem'} }>
                            <Col>
                                <div>
                                    <Link to={'/add-book'} className={'nav-link'}>
                                        <img src={addLogo} alt="add logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Add Book</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/delete-book'} className={'nav-link'}>
                                        <img src={deleteLogo} alt="delete logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Delete Book</p>
                                    </Link>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Link to={'/search-book'} className={'nav-link'}>
                                        <img src={searchLogo} alt="add logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Search Book</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/return-book'} className={'nav-link'}>
                                        <img src={returnLogo} alt="add logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Return Book</p>
                                    </Link>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Link to={'/issue-book'} className={'nav-link'}>
                                        <img src={issueLogo} alt="add logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Issue Book</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={'/add-member'} className={'nav-link'}>
                                        <img src={userLogo} alt="add logo" style={{"width":'100px'}}/>
                                        <p className={"text"}>Add Member</p>
                                    </Link>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <div>
                                <Link to={'/search-member'} className={'nav-link'}>
                                    <img src={searchMemberLogo} alt="add logo" style={{"width":'100px'}}/>
                                    <p className={"text"}>Search Member</p>
                                </Link>
                            </div>

                        </Row>

                        <div style={{'display':'flex','flex-direction':'row','justify-content': 'center'}}>
                            <img onClick={handleClick} className={'mb-5'} src={logoutLogo} alt="Logout" style={{"width": '75px','margin-top':'3rem','margin-right':'6rem'}}/>
                            <Link to={'/'} className={'nav-link'}>
                                <img className={'mb-5'} src={home} alt="Logout" style={{"width": '75px','margin-top':'3rem','margin-left':'6rem'}}/>
                            </Link>
                        </div>
                    </div>
                    <div className={'col-7'}>
                        <Navbar bg={"light"} >
                            <Container>
                                <img src={bookShelf} style={{'width':'50px'}} alt="Logo"/>
                                <Nav.Link className={"mx-4 title2"}>Book Hub</Nav.Link>
                                <Nav className={"justify-content-end"}>
                                    <Nav.Link>
                                        <img src={info} alt="" style={{'width':'50px'}}/>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <img src={settings} alt="" style={{'width':'50px'}}/>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <img src={profile} alt="" style={{'width':'50px'}}/>
                                    </Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>

                        <div style={{'text-align':'center'}} >
                            <h2 className={'title2 my-3'} style={{'font-size':'50px'}}>{prevName}</h2>
                            {alert()}
                            <Form onSubmit={onSubmit}  style={{"width":"600px",'margin':"0 auto"}}>
                                <Form.Group className="mb-3" controlId="NIC">
                                    <Form.Label className={'text'} style={{'color':'black'}}>NIC Number</Form.Label>
                                    <Form.Control type="text" value={nic} onChange={(e) => onChangeNIC(e.target.value)} placeholder="Enter NIC Number" readOnly='readonly'/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Name">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={(e) => onChangeName(e.target.value)} placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Email">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={(e) => onChangeEmail(e.target.value)} placeholder="Enter Email" />
                                </Form.Group>

                                <Form.Group className={"mb-3"} controlId="Gender">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Gender</Form.Label>
                                    <Form.Select value={gender} onChange={(e) => onChangeGender(e.target.value)} aria-label="Default select example" >
                                        <option>--- Select Gender ---</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Adress">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Home Address</Form.Label>
                                    <Form.Control type="text" value={address} onChange={(e) => onChangeAddress(e.target.value)} placeholder="Enter Home Address" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Contact">
                                    <Form.Label className={'text'} style={{'color':'black'}}>Contact Number</Form.Label>
                                    <Form.Control value={contact} onChange={(e) => onChangeContact(e.target.value)} type="text" placeholder="Enter Contact Number" />
                                </Form.Group>

                                <Button variant="primary" className={'text'} type="submit" size={'lg'} style={{'width':'150px','margin-top':'30px'}} block="block">Save</Button>
                            </Form>
                        </div>
                    </div>
                </Row>
            </div>
        );
}
