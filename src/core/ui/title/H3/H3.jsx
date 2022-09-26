import React from 'react';
import cl from "./_H3.module.scss"

const H3 = ({children, className, ...props}) => {
    return (
        <h3 className={[className, cl.title].join(" ")} {...props}>{children}</h3>
    );
};

export default H3;