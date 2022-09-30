import React from 'react';
import cl from "./_DetailCollection.module.scss";
import MainPageWrapper from "../core/components/main_page_wrapper/MainPageWrapper";
import {useParams} from "react-router";

const DetailCollection = () => {
    const {path} = useParams()
    return (
        <MainPageWrapper className={cl.block} >
        </MainPageWrapper>
    );
};

export default DetailCollection;