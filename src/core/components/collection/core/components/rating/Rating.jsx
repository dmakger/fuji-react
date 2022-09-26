import React from 'react';
import cl from './_Rating.module.scss'
import clColor from '../../../../rating/_Rating.module.scss'
import Text16B from "../../../../../ui/text/16/bold/Text16B";
import getClassNameColor from "../../../../../service/rating";

const Rating = ({className, rating, ...props}) => {
    let classNameColor = getClassNameColor(rating)
    let ratingText = rating
    if (ratingText == 0) {
        ratingText = 'Нет оценок'
    }

    return (
        <div className={[cl.block, classNameColor, className].join(' ')} {...props}>
            <Text16B className={[cl.title, clColor.title].join(' ')}>{ratingText}</Text16B>
        </div>
    );
};

export default Rating;