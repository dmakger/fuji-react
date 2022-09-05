import React from 'react';

import clAuth from "../_Auth.module.scss"
import clSignIn from "./_SignIn.module.scss"

import H2 from "../../../UI/title/H2/H2";
import Input from "../../../UI/input/Input";
import Label from "../../../UI/label/Label";
import LinkPurple from "../../../UI/link/purple/LinkPurple";
import ButtonFillRadiusPurple from "../../../UI/button/fill-radius-purple/ButtonFillRadiusPurple";
import Text14 from "../../../UI/text/14/Text14";

import emailSVG from "../../../../static/img/email.svg"
import lockSVG from "../../../../static/img/lock.svg"


const SignIn = ({className}) => {
    return (
        <form className={[clAuth.block, className].join(" ")}>
            <H2 className={clAuth.title}>Вход</H2>

            <div className={clAuth.listFields}>
                <div className={clAuth.listFields__item}>
                    <Label htmlFor="email">Ваш адрес электронной почты (Email)</Label>
                    <Input image={emailSVG} type="email" className={clAuth.input} placeholder="fuji@yandex.ru" id="email" required/>
                </div>
                <div className={clAuth.listFields__item}>
                    <Label htmlFor="password">Придумайте пароль</Label>
                    <Input image={lockSVG} type="password" className={clAuth.input} placeholder="Пароль" id="password" required/>
                </div>
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