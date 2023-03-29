import React from 'react'
import {
    Navbar,
    Nav,
    Container,
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';



const Header = () => {

    const common = {
        marginRight: 15,
        fontSize: 22,
        letterSpacing: ".5px", 
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container >
                    <Navbar.Brand href="/"> <h2 className='mt-2 h2_right' style={{ color: "#6c63ff" }} >Sagar Shriwastav</h2> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav  className='ms-auto' >
                            <div className='mt-2 bold' >
                                <NavLink to="/" className="text-decoration-none" style={common} >Home</NavLink>
                                <NavLink to="/about" className="text-decoration-none" style={common} >Skills</NavLink>
                                <NavLink to="/projects" className="text-decoration-none" style={common} >Projects</NavLink>
                                <NavLink to="/contact" className="text-decoration-none" style={common} >Contact</NavLink>
                                <NavLink to="https://github.com/sagarshriwastav?tab=repositories" className="text-decoration-none" target="_blank" rel="noreferrer" style={common} ><i className='fa-brands fa-github' ></i></NavLink>
                                <NavLink to="https://www.linkedin.com/in/sagar-kumar-3a0111170/" className="text-decoration-none" target="_blank" rel="noreferrer" style={common} ><i className='fa-brands fa-linkedin' ></i></NavLink>
                                {/* <p className='d-flex' >
                                <a href="https://github.com/sagarshriwastav?tab=repositories" target="_blank" rel="noreferrer" >

                                </a>
                                <a href="https://www.facebook.com/sagarkumar.shriwastav" target="_blank" rel="noreferrer">
                                    <i className='fa-brands fa-linkedin mx-3' ></i>
                                </a>
                            </p> */}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header