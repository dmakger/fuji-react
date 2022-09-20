import React from 'react';
import clDefault from '../_Text16.module.scss'
import clM from './_Text16M.module.scss'

const Text16M = ({className, children, ...props}) => {
    return (
        <span className={[clDefault.text, clM.text, className].join(" ")} {...props}>{children}</span>
    );
};

export default Text16M;