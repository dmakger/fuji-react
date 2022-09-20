import React from 'react';
import cl from './_TopBar.module.scss'
import SearchFilter from "../../../../search/search_filter/SearchFilter";

const TopBar = ({className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <SearchFilter className={cl.search}/>
        </div>
    );
};

export default TopBar;