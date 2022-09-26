import React from 'react';
import cl from './_Text18.module.scss'

const Text18 = ({className, children, ...props}) => {
    return (
        <p className={[className, cl.text].join(" ")} {...props}>{children}</p>
    );
};

export default Text18;