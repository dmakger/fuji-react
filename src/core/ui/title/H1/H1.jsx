import React from 'react';
import cl from "../H2/_H2.module.scss";

const H1 = ({children, className, ...props}) => {
    return (
        <h1 className={[className, cl.title].join(" ")} {...props}>{children}</h1>
    );
};

export default H1;