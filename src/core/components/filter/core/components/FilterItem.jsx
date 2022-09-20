import React from 'react';
import cl from "./_FilterItem.module.scss";
import Text16M from "../../../../ui/text/16/medium/Text16M";
import checkMarkSVG from "../../../../static/img/check-mark-fill-white.svg";

const FilterItem = ({className, title, id, nameInput, activeId, ...props}) => {
    return (
        <label className={[cl.selectLabel, className].join(" ")} {...props}>
            <Text16M>{title}</Text16M>
            <input id={id} type="radio" className={cl.selectInput} name={nameInput}
                   defaultChecked={id === activeId}/>
            <img src={checkMarkSVG} alt='icon' className={cl.selectCheck}/>
        </label>
    );
};

export default FilterItem;