import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <Container style={{marginTop:'50px', marginBottom:'50px', minHeight:'70vh'}}>
            <h1 style={{marginTop:'50px', display:'block'}}>О сайте:</h1>
            <Row>
                <Col md={{span:6}}>
                    <p style={{fontSize:'1.3em'}}>
                        Создатель: Кузьмиченко Дмитрий<br/>
                        Студент группы ВИАС23<br/>
                        ✉ limbooo689@gmail.com<br/>
                        <span style={{color:'mediumslateblue'}}>
                            Tools: React 18.2.0<br/>
                            Bootstrap 5.2.3<br/>
                            React Bootstrap 2.7.4<br/>
                        </span>
                        Repo (private):
                        <Link to={'https://github.com/Dmittru/finalwork'} target='_blank' style={{textDecoration:'none', color:'#63bad9'}}>
                            &nbsp;Github link<br/>
                        </Link>
                        Source:
                        {/*ДОБАВИТЬ СУРСЫ!!!!!!!!!!!*/}
                        <br/>
                        <br/>
                        <span style={{lineHeight:.6}} className='logotext' onClick={() => window.location.href = '/'}>
                            ForceProgramming<br/>
                            Mega Cool React<br/>
                            Website</span><br/>
                    </p>
                </Col>
                <Col md={{span:6}}>
                    <Image src={'/creator.png'} style={{width:'500px', float:'right', borderRadius:'25px', boxShadow:'3px 3px 1px black, -3px -3px 1px black'}}/>
                </Col>
            <p>Сайт является полной собственностью <Link to={'https://github.com/Dmittru'} target='_blank' style={{textDecoration:'none', color:'#63bad9'}}>@Dmittru</Link></p>
            </Row>
        </Container>
    );
};

export default AboutPage;