import React from 'react';
import cl from "./_Text14.module.scss"

const Text14 = ({className, children, ...props}) => {
    return (
        <p className={[className, cl.text].join(" ")} {...props}>{children}</p>
    );
};

export default Text14;