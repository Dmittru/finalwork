import React, {useEffect, useState} from 'react';
import '../../styles/LandingPage.css'
import {Col, Container, Row, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import config from '../../../config.json'

const LandingPage = () => {
    const [randomLetter, setRandomLetter] = useState('');
    //console.log(config["additional-material"]["themes"])
    useEffect(() => {
        if(randomLetter.length > 10){
            setRandomLetter('');
        }
        const intervalId = setInterval(() => {

            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            setRandomLetter(randomLetter+alphabet[randomIndex]);
        }, 250);

        return () => {
            clearInterval(intervalId);
        };
    }, [randomLetter]);
    return (
        <Container style={{minHeight:'100vh', backgroundColor:'#232529', marginTop:'5vh'}}>
            <div style={{position:'relative', height:'500px',marginBottom:'100px'}}>
                <h1 style={{fontSize:'3.5em'}}>
                    Приветствуем, странник
                </h1>
                <p style={{fontSize:'1.8em'}}>
                    Перед вами сайт по изучению web-программирования,<br/>
                    начиная с основ, включающий много тонкостей<br/>
                    и фишек, где мы рассказываем о том,<br/>
                    как окунуться во <strong>Front-end IT</strong>.
                </p>
                <div>
                    <h3 style={{marginTop:'100px', fontSize:'3em', overflow:'hidden', width:'50%', whiteSpace:'nowrap'}}>
                        <code>
                            Compiling...<span className='vertflo'>|</span>
                        </code>
                        <br/>
                        <code>
                            let a =&nbsp;"{randomLetter}"
                        </code>
                    </h3>
                </div>
                <Image src={'/wizard.png'} style={{position:'absolute',top:0, right:0 ,float:'right',height:'500px', overflow:'hidden', objectFit:'cover'}}/>
            </div>
            <div style={{marginBottom:'50px'}}>
                <h4 style={{display:'block'}}>
                    Содержание<br/>
                </h4>
                <p>
                    Здесь вы можете найти нужные статьи о каждом виде образования, включая самообразование, онлайн-школы и туторы.<br/>
                    Все знания делаают упор на изучение и практику таких языков, как TypeScript и Javascript, а также HTML и CSS.<br/>
                    Узнайте, как пользоваться node, что такое V8, как он работает и какие особенности имеет.<br/>
                    Так вы начнёте свой путь в IT 🐱‍👤
                </p>
            </div>
            <div>
                <div>
                    {Object.keys(config).map((key) => {
                        const item = config[key];
                        return(
                            <div>
                                <h5 className='linked' style={{marginTop:'30px'}}>
                                    <Link to={item["path"]} className='linked'>{item["title"]}</Link>
                                </h5>
                                <Row className='selectlearnblock'>
                                {item["themes"].map((item,key)=>{
                                    return(

                                            <Col {...(key%3 === 0 ? { md: { offset:0, span:3 } } : { md: { offset:1, span:3 } })} className='learnblock'>
                                                <p key={key} className='linked' style={{marginBottom:'8px'}}>
                                                    <Link to={item["path"]} className='linked'>{item["title"]}</Link>
                                                </p>
                                            </Col>

                                    )
                                })}
                                </Row>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{margin:'100px'}}>
                <Image src={'/ghargool.gif'}/>
            </div>
        </Container>
    );
};

export default LandingPage;