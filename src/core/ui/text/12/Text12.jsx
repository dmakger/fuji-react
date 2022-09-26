import React from 'react';
import cl from "../14/_Text14.module.scss";

const Text12 = ({className, children, ...props}) => {
    return (
        <p className={[className, cl.text].join(" ")} {...props}>{children}</p>
    );
};

export default Text12;