import React, {useEffect, useState} from 'react';
import '../../styles/LessonPage.css'
import {Container, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {
    LessonBeforeAll, LessonBooks, LessonForums, LessonGeekbrains,
    LessonLangChoice, LessonLost, LessonNeurolinks, LessonOnlineBooks,
    LessonOnlineSch,
    LessonRoadmaps,
    LessonSelfLearn, LessonSkillbox, LessonSkillfactory,
    LessonTutors, LessonUsefulLinks, LessonYaPractice, LessonYT
} from "./LessonContent";
import config from "../../../config.json";

const LessonPage = () => {
    const { type } = useParams();
    const [overlayLable, setOverlayLable] = useState('В начало');
    const [nextPath, setNextPath] = useState('/book/main');




    useEffect(() => {
        const getNextTitleByTitle = (title) => {
            for (const section in config) {
                const themes = config[section].themes;
                for (let i = 0; i < themes.length; i++) {
                    if ((themes[i].path).includes(type)) {
                        setOverlayLable(themes[i].nextTitle);
                        setNextPath(themes[i].next);
                    }
                }
            }
            return 'В начало';
        };
        getNextTitleByTitle(type);
    }, [type]);

    return (
        <div style={{overflow:'hidden', position:'relative'}}>
            <OverlayTrigger
                placement="left"
                overlay={
                    <Tooltip id="tooltip-verified">{overlayLable}</Tooltip>
                }
            >
                <div
                    className='nextskiper'
                    style={{height: '100%', position: 'absolute', right: 0, top: 0, width: '100px'}}
                    onClick={()=>{
                        window.location.href = nextPath;
                    }}
                >
                    ->
                </div>
            </OverlayTrigger>
            <Container style={{paddingTop:'50px', paddingBottom:'50px', minHeight:'85vh', position: 'relative'}}>

                {
                    type === 'before-all' ? <LessonBeforeAll/> :
                        type === 'roadmaps' ? <LessonRoadmaps/> :
                            type === 'web-language' ? <LessonLangChoice/> :
                                type === 'online-schools' ? <LessonOnlineSch/> :
                                    type === 'tutors' ? <LessonTutors/> :
                                        type === 'self-learning' ? <LessonSelfLearn/> :
                                            type === 'skillbox' ? <LessonSkillbox/> :
                                                type === 'skillfactory' ? <LessonSkillfactory/> :
                                                    type === 'yandexprancticum' ? <LessonYaPractice/> :
                                                        type === 'geekbrains' ? <LessonGeekbrains/> :
                                                            type === 'youtube' ? <LessonYT/> :
                                                                type === 'forums' ? <LessonForums/> :
                                                                    type === 'online-books' ? <LessonOnlineBooks/> :
                                                                        type === 'neurolinks' ? <LessonNeurolinks/> :
                                                                            type === 'books' ? <LessonBooks/> :
                                                                                type === 'useful-links' ? <LessonUsefulLinks/> :
                                                                                    <LessonLost/>
                }
            </Container>
        </div>
    );
};

export default LessonPage;

