import React from 'react';
import '../../styles/NavFooter.css'
import {Link} from "react-router-dom";

const NavFooter = () => {
    return (
        <div className='navfooter'>
            <p style={{margin:0}}>Copyright © 2023</p>
            <p style={{margin:0}}>developed via tools: React, Bootstrap</p>
            <h5>Builded and designed by github <Link to={'https://github.com/Dmittru'} target='_blank' style={{textDecoration:'none', color:'#63bad9'}}>@Dmittru</Link></h5>
        </div>
    );
};

export default NavFooter;