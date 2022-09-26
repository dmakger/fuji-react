import React from 'react';
import cl from "./_MainInfoItem.module.scss";
import Text18 from "../../../../../../ui/text/18/Text18";

const MainInfoItem = ({image, title, className, ...props}) => {
    return (
        <div className={[cl.info, className].join(" ")} {...props}>
            <img className={cl.infoImage} src={image} alt='icon'/>
            <Text18 className={cl.infoTitle}>{title}</Text18>
        </div>
    );
};

export default MainInfoItem;