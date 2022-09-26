import React from 'react';
import cl from './_AddCollection.module.scss'
import H3 from "../../../../../ui/title/H3/H3";

const AddCollection = ({className, path, collectionIsAdded, onClick, ...props}) => {
    return (
        <div className={[cl.block, className, collectionIsAdded ? cl.isAdded : ""].join(" ")} {...props}>
            <div className={cl.image} onClick={onClick}/>
            <H3 className={cl.title} />
        </div>
    );
};

export default AddCollection;