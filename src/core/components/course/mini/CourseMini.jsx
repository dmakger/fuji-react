import React from 'react';
import cl from './_CourseMini.module.scss'
import H3 from "../../../ui/title/H3/H3";
import Text14 from "../../../ui/text/14/Text14";
import Text18 from "../../../ui/text/18/Text18";

import {getImage} from "../../../api/mainAPI";
import {getNumber} from '../../../service/number'

import starSVG from '../../../static/img/star-fill-yellow.svg'
import userSVG from '../../../static/img/user-outline-white.svg'
import watchSVG from '../../../static/img/watch-outline-white.svg'


const CourseMini = ({course, className, ...props}) => {
    const image = getImage(course.image_url)
    const info = [
        {
            id: 0,
            image: starSVG,
            title: course.rating
        },
        {
            id: 1,
            image: userSVG,
            title: course.members_amount
        },
        {
            id: 2,
            image: watchSVG,
            title: course.duration_in_minutes
        },
    ]
    return (
        <div className={cl.course} {...props}>
            <div className={cl.titleInfo}>
                <div className={cl.titleInfoImage}>
                    <img className={cl.titleInfoImageSelf} src={image} alt='preview'/>
                    <div className={cl.titleInfoImageDark} />
                </div>
                <div className={cl.titleInfoText}>
                    <H3 className={cl.titleInfoTextTitle}>{course.title}</H3>
                    <Text14 className={cl.titleInfoTextAuthor}>{course.author.username}</Text14>
                </div>
            </div>
            <div className={cl.info}>
                <div className={cl.mainInfo}>
                    {info.map(item =>
                        <div key={item.id} className={cl.mainInfoItem}>
                            <img className={cl.mainInfoItemImage} src={item.image} alt='icon'/>
                            <Text18 className={cl.mainInfoItemTitle}>{getNumber(item.title)}</Text18>
                        </div>
                    )}
                </div>
                <div className={cl.otherInfo}>

                </div>
            </div>
        </div>
    );
};

export default CourseMini;