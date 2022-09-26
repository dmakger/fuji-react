import React, {useState} from 'react';
import cl from './_CollectionBig.module.scss'
import {getImage} from "../../../api/mainAPI";
import H1 from "../../../ui/title/H1/H1";
import Author from "../../author/Author";
import {COLLECTION_URL} from "../../../service/urls";
import {Link} from "react-router-dom";
import Rating from "../core/components/rating/Rating";
import AddCollection from "../core/components/add_collection/AddCollection";
import {addCollections, popCollections} from "../../../../main/core/api/collectionAPI";
import LinkGray from "../../../ui/link/gray/LinkGray";
import CourseMini from "../../course/mini/CourseMini";

const CollectionBig = ({
                           path,
                           title,
                           image,
                           author,
                           rating,
                           courses,
                           addedCollectionList,
                           setAddedCollectionList,
                           className,
                           ...props
                       }) => {
    const ratingUpdate = rating.toFixed(1)
    const [collectionIsAdded, setCollectionIsAdded] = useState(false)

    const getCollection = () => {
        return {
            title: title,
            path: path,
            image_url: image
        }
    }

    const addCollection = () => {
        setAddedCollectionList([getCollection(), ...addedCollectionList])
    }

    const removeCollection = () => {
        const array = [...addedCollectionList]
        for (let i = 0; i !== array.length; i++) {
            if (array[i].path === path) {
                array.splice(i, 1)
                setAddedCollectionList(array)
                break
            }
        }
    }

    const handleClickAdd = () => {
        if (collectionIsAdded) {
            popCollections(path).then(() => {
                removeCollection()
                setCollectionIsAdded(false)
            })
        } else {
            addCollections(path).then(() => {
                addCollection()
                setCollectionIsAdded(true)
            })
        }
    }
    const linkCollection = `${COLLECTION_URL}/${path}`;

    return (
        <div className={cl.collection} {...props}>
            <div className={cl.info}>
                <img src={getImage(image)} alt="icon" className={cl.image}/>
                <div className={cl.infoText}>
                    <Link to={linkCollection}>
                        <H1 className={cl.title}>{title}</H1>
                    </Link>
                    <Author className={cl.author} image={author.avatar_url} name={author.username} path={author.path}/>
                </div>
                <div className={cl.infoNav}>
                    <Rating rating={ratingUpdate} className={cl.rating}/>
                    <AddCollection className={cl.addCollection}
                                   path={path}
                                   onClick={handleClickAdd}
                                   collectionIsAdded={collectionIsAdded}/>
                </div>
                <LinkGray to={linkCollection} className={cl.infoLink} title='Открыть всё'/>
            </div>
            <div className={cl.courses}>
                {courses.map(item =>
                    <CourseMini key={item.path} course={item} />
                )}
            </div>
        </div>
    );
};

export default CollectionBig;