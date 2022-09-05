import React from 'react';
import cl from '../styles/_SignInPage.module.scss'
import SignIn from "../components/block/auth/signin/SignIn";
import LogoWeight from "../components/UI/logo/weight/LogoWeight";

const SignInPage = () => {
    return (
        <div className={cl.page}>
            <LogoWeight className={cl.logo} />
            <SignIn className={cl.content}/>
        </div>
    );
};

export default SignInPage;