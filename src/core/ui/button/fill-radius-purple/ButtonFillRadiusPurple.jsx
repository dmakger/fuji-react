import React from 'react';
import cl from "./_ButtonFillRadiusPurple.module.scss"

const ButtonFillRadiusPurple = ({className, children, ...props}) => {
    return (
        <button className={[className, cl.button].join(" ")} {...props}>{children}</button>
    );
};

export default ButtonFillRadiusPurple;