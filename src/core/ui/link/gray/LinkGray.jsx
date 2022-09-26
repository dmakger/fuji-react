import React from 'react';
import cl from "./_LinkGray.module.scss";
import H3 from "../../title/H3/H3";
import {Link} from "react-router-dom";

const LinkGray = ({to, title, className, children, ...props}) => {
    return (
        <Link to={to} className={[cl.link, className].join(" ")} {...props}>
            <H3 className={cl.linkTitle}>{title}</H3>
            {children}
        </Link>
    );
};

export default LinkGray;