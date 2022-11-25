import React, {useEffect} from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Navbar,Nav,Container} from "react-bootstrap";
import {Link,useNavigate} from "react-router-dom";

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
import searchMemberLogo from "../assets/searchMember.png";

export  function Home(props) {

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
                        <div>
                            <Link to={'login'} className={'nav-link'}>
                                <img onClick={handleClick} className={'mb-5'} src={logoutLogo} alt="Logout" style={{"width": '75px','margin-top':'3rem'}}/>
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

                        <div style={{'text-align':'center'}}>
                            <img className={'mt-4'} src={profile} style={{'width':'150px','border':'2px solid #555',
                                'border-top-right-radius':'25px','border-bottom-right-radius':'25px','border-bottom-left-radius':'25px'}} alt=""/>
                            <div>
                                <h2 className={'title2 mt-5'}>Search History</h2>
                                <hr style={{"border-top": "6px dotted red"}}/>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Book Name</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Time</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">B012</th>
                                        <td>Alice in Wonderland</td>
                                        <td>Lewis Carrol</td>
                                        <td>11:19 AM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">B002</th>
                                        <td>Adventures of Tom Sawyer</td>
                                        <td>Mark Twain</td>
                                        <td>12:17 PM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">B056</th>
                                        <td>Arms and the Man</td>
                                        <td>G.B.Shaw</td>
                                        <td>01:03 PM</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <h2 className={'title2 mt-5'}>Recently Added Books</h2>
                                <hr style={{"border-top": "6px dotted red"}}/>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Book Name</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Time</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">B057</th>
                                        <td>Time Machine</td>
                                        <td>H.G. Wells</td>
                                        <td>03.00 PM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">B058</th>
                                        <td>The Merchant of Venice</td>
                                        <td>Shakespeare</td>
                                        <td>03.02 PM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">B059</th>
                                        <td>Origin of Species</td>
                                        <td>Charles Darwin</td>
                                        <td>03.04 PM</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        );
    
}
