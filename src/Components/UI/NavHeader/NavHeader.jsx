import React from 'react';
import '../../styles/NavHeader.css'
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavHeader = () => {
    return (
        <Navbar className='navbar'>

            <Navbar.Brand>
                <Image
                    src={'/moon.png'}
                    alt="logo"
                    roundedCircle
                    className="cut-image logoimg"
                    onClick={() => window.location.href = '/'}
                />
                <p className='logotext' onClick={() => window.location.href = '/'}>
                    ForceProgramming
                </p>
            </Navbar.Brand>
            <div className='d-flex align-items-center justify-content-around' style={{width:'12%'}}>
                {
                    [{title:'Учебник', path:'/book/main'}, {title:'О сайте', path: '/about'}].map((item,key)=>{
                        return(
                            <Link to={item.path} key={key} className='linked' style={{margin:0}}>
                                {item.title}
                            </Link>
                        )
                    })
                }
            </div>
        </Navbar>
    );
};

export default NavHeader;