import React from 'react';
import cl from './_TopBar.module.scss'

const TopBar = ({className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <h1>Search</h1>
        </div>
    );
};

export default TopBar;