import React from 'react';
import {Col, Container, Image, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import config from "../../../config.json";
import {Link, useParams} from "react-router-dom";

const BookContentMain = () => {
    return (
        <Container style={{marginTop:'50px', marginBottom:'50px'}}>
            <h1 style={{color:'white'}}>Весь учебник</h1>
            <div className='d-flex flex-wrap'>
                {Object.keys(config).map((key) => {
                    const item = config[key];
                    return(
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-verified">{item["desc"]}</Tooltip>
                            }
                        >
                        <div className={'lessonblock'}>
                            <h5 className='linked'>
                                <Link to={item["path"]} className='linked'>{item["title"]}</Link>
                            </h5>
                        </div>

                        </OverlayTrigger>
                    )
                })}
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <Image style={{height:'500px'}} src={'/bknigt.gif'}/>
            </div>
        </Container>
    );
};

const BookContentType = () => {
    const { type } = useParams();
    return(
        <Container style={{marginTop:'50px', marginBottom:'50px', minHeight:'70vh'}}>
            <div>
                <h1 style={{marginTop:'30px', display:'block'}}>
                   {config[type].title}
                </h1>
                <p style={{color:'grey', fontSize:'1.3em'}}>
                    {config[type].desc}
                </p>
                <Row className='selectlearnblock'>
                    {config[type].themes.map((item,key)=>{
                        return(
                            <div className='learnblock'>
                                <p key={key} className='linked' style={{marginBottom:'8px',fontSize:'1.5em'}}>
                                    <Link to={item.path} className='linked'>{item.title}</Link>
                                </p>
                            </div>
                        )
                    })}
                </Row>
                <div className='d-flex align-items-center justify-content-center'>
                    <Image style={{height:'300px', marginTop:'80px'}} src={'/branch.png'}/>
                </div>
            </div>
        </Container>
    )
}

const BookContent404 = () => {
    return(
        <Container style={{marginTop:'50px', marginBottom:'50px', minHeight:'70vh'}}>
            <h1 style={{display:'block', margin:0}}>
                Путник, ты потерялся,
            </h1>
            <h2>
                вернись обратно, нажав на портал:
            </h2>
            <div className='d-flex align-items-center justify-content-center'>
                <Image style={{height:'300px', marginTop:'120px', cursor:'pointer'}} src={'/portal.gif'} onClick={() => window.location.href = '/book/main'}/>
            </div>
        </Container>
    )
}


export {BookContentMain, BookContentType, BookContent404};