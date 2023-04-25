import React from 'react';
import '../../styles/BookPage.css'
import {useParams} from "react-router-dom";
import {BookContentType, BookContentMain, BookContent404} from "./BookContent";
import config from "../../../config.json";

const BookPage = () => {
    const { type } = useParams();
    if(type === 'main'){
        return(
            <BookContentMain/>
        )
    } else if (Object.keys(config).includes(type)) {
        return (
            <BookContentType/>
        )
    } else {
        return (
            <BookContent404/>
        );
    }

};

export default BookPage;