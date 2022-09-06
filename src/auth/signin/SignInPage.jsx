import React from 'react';
import cl from './_SignInPage.module.scss'
import SignIn from "./components/signin/SignIn";
import LogoWeight from "../../core/ui/logo/weight/LogoWeight";

const SignInPage = () => {
    return (
        <div className={cl.page}>
            <LogoWeight className={cl.logo}/>
            <SignIn className={cl.content}/>
        </div>
    );
};

export default SignInPage;