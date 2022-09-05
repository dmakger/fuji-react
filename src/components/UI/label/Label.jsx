import React from 'react';
import cl from './_Label.module.scss';

const Label = ({className, children, ...props}) => {
    return (
        <label {...props} className={[className, cl.label].join(" ")}>{children}</label>
    );
};

export default Label;