import React from 'react';

import clAuth from "../../../_Auth.module.scss"
import clSignIn from "./_SignIn.module.scss"

import H2 from "../../../../core/ui/title/H2/H2";
import LinkPurple from "../../../../core/ui/link/purple/LinkPurple";
import ButtonFillRadiusPurple from "../../../../core/ui/button/fill-radius-purple/ButtonFillRadiusPurple";
import Text14 from "../../../../core/ui/text/14/Text14";

import emailSVG from "../../../../core/static/img/email.svg"
import lockSVG from "../../../../core/static/img/lock.svg"
import InputDefault from "../../../../core/components/default_input/InputDefault";


const SignIn = ({className}) => {
    return (
        <form className={[clAuth.block, className].join(" ")}>
            <H2 className={clAuth.title}>Вход</H2>

            <div className={clAuth.listFields}>
                <InputDefault
                    title="Электронная почта (Email)"
                    image={emailSVG} type="email" placeholder="fuji@yandex.ru" id="email" required/>

                <InputDefault
                    title="Придумайте пароль"
                    image={lockSVG} type="password" placeholder="Пароль" id="password" required />
            </div>

            <LinkPurple to="#" className={clSignIn.navHelp}>Забыли пароль?</LinkPurple>

            <ButtonFillRadiusPurple type="submit" className={clAuth.submit}>Войти</ButtonFillRadiusPurple>

            <Text14 className={clAuth.navDescription}>
                Нет аккаунта?
                <LinkPurple to="#" className={clAuth.navDescription__link}> Зарегистрироваться</LinkPurple>
            </Text14>
        </form>
    );
};

export default SignIn;