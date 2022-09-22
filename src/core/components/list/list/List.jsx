import React from 'react';
import cl from './_List.module.scss'

const List = ({className, children, ...props}) => {
    return (
        <div className={[cl.list, className].join(" ")} {...props}>
            {children}
        </div>
    );
};

export default List;