import React from 'react';
import cl from "./_H2.module.scss"

const H2 = ({children, className, ...props}) => {
    return (
        <h2 className={[className, cl.title].join(" ")} {...props}>{children}</h2>
    );
};

export default H2;