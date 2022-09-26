import React from 'react';
import cl from './_PriceCourse.module.scss'
import Text18 from "../../../../../ui/text/18/Text18";
import Text14 from "../../../../../ui/text/14/Text14";

const PriceCourse = ({price, className, ...props}) => {
    if (price) {
        return (

            <div className={[cl.nonFree, className].join(" ")} {...props}>
                <Text18 className={cl.price}>{price}</Text18>
                <Text14 className={cl.symbol}>₽</Text14>
            </div>
        )
    }
    return (
        <Text18 className={[cl.free, className].join(" ")} {...props}>Бесплатно</Text18>
    )
};

export default PriceCourse;