import React from 'react';
import {Link} from "react-router-dom";
import cl from "./_LinkPurple.module.scss"

const LinkPurple = ({className, children, ...props}) => {
    return (
        <Link className={[className, cl.link].join(" ")} {...props}>
            <span>{children}</span>
        </Link>
    );
};

export default LinkPurple;