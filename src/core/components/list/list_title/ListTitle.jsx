import React from 'react';
import cl from "./_ListTitle.module.scss";
import Text16B from "../../../ui/text/16/bold/Text16B";
import arrowDownSVG from "../../../static/img/arrow-down-fill-white.svg";

const ListTitle = ({title, onClick, ...props}) => {
    return (
        <div className={cl.title}  onClick={onClick} {...props}>
            <Text16B>{title}</Text16B>
            <img src={arrowDownSVG} alt='icon' className={cl.image}/>
        </div>
    );
};

export default ListTitle;