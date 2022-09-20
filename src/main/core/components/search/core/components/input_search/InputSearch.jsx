import React from 'react';
import cl from "./_InputSearch.module.scss";

const InputSearch = ({className, ...props}) => {
    return (
        <input placeholder='Поиск' className={[cl.input, className].join(" ")} {...props}/>
    );
};

export default InputSearch;