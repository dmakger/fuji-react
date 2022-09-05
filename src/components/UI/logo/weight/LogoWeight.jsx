import React from 'react';
import logo from '../../../../static/img/logo.svg'
import cl from './_LogoWeight.module.scss'

const LogoWeight = ({className}) => {
    return (
        <img src={logo} alt="logo" className={[className, cl.logo].join(" ")}/>
    );
};

export default LogoWeight;