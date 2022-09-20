import React from 'react';
import Text16M from "../../../../ui/text/16/medium/Text16M";
import clDefault from '../core/_ListItem.module.scss'
import {Link} from "react-router-dom";

const LinkListItem = ({to, title, className, ...props}) => {
    return (
        <Link to={to} className={[clDefault.wrapper, className].join(" ")} {...props}>
            <Text16M>{title}</Text16M>
        </Link>
    );
};

export default LinkListItem;