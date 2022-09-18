import React from 'react';
import cl from './_SideBarCollection.module.scss'
import {Link} from "react-router-dom";

const SideBarCollection = ({to, image, title, className, ...props}) => {
    const alt = 'icon'
    return (
        <Link to={to} className={[cl.collection, className].join(" ")} {...props}>
            <img src={image} alt={alt} className={cl.collectionImage}/>
            <p className={cl.collectionTitle}>{title}</p>
        </Link>
    );
};

export default SideBarCollection;