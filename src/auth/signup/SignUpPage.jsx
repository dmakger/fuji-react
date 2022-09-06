import React from 'react';
import cl from '../core/_SignPage.module.scss'
import clSelf from './_SignUpPage.module.scss'
import LogoWeight from "../../core/ui/logo/weight/LogoWeight";
import SignUp from "./components/signup/SignUp";

const SignUpPage = () => {
    return (
        <div className={cl.page}>
            <LogoWeight className={[cl.logo, clSelf.logo].join(" ")}/>
            <SignUp className={[cl.content, clSelf.content].join(" ")}/>
        </div>
    );
};

export default SignUpPage;