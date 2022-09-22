import React from 'react';
import cl from './_TopBar.module.scss'
import SearchFilter from "../../../../search/search_filter/SearchFilter";
import UserNav from "./core/components/UserNav";

const TopBar = ({className, ...props}) => {

    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <SearchFilter className={cl.search}/>
            <UserNav className={cl.userNav}/>
        </div>
    );
};

export default TopBar;