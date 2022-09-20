import React from 'react';
import cl from './_TopBar.module.scss'
import Search from "./core/componets/search/Search";

const TopBar = ({className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <Search className={cl.search}/>
        </div>
    );
};

export default TopBar;