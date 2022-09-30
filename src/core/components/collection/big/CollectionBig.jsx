import React from 'react';
import cl from './_CollectionBig.module.scss'
import {COLLECTION_URL} from "../../../service/urls";
import LinkGray from "../../../ui/link/gray/LinkGray";
import CourseMini from "../../course/mini/CourseMini";
import CollectionDefault from "../core/components/default/CollectionDefault";

const CollectionBig = ({collection, addedCollectionList, setAddedCollectionList, className, ...props}) => {
    const linkCollection = `${COLLECTION_URL}/${collection.path}`;

    return (
        <div className={cl.block} {...props}>
            <div className={cl.collection}>
                <CollectionDefault collection={collection}
                                   addedCollectionList={addedCollectionList}
                                   setAddedCollectionList={setAddedCollectionList}/>
                <LinkGray to={linkCollection} className={cl.link} title='Открыть всё'/>
            </div>
            <div className={cl.courses}>
                {collection.courses.map(item =>
                    <CourseMini key={item.path} course={item}/>
                )}
            </div>
        </div>
    )
        ;
};

export default CollectionBig;