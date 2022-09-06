import React from 'react';
import clAuth from "../../../core/components/_Auth.module.scss";
import H2 from "../../../../core/ui/title/H2/H2";
import InputDefault from "../../../../core/components/default_input/InputDefault";
import emailSVG from "../../../../core/static/img/email.svg";
import lockSVG from "../../../../core/static/img/lock.svg";
import LinkPurple from "../../../../core/ui/link/purple/LinkPurple";
import ButtonFillRadiusPurple from "../../../../core/ui/button/fill-radius-purple/ButtonFillRadiusPurple";
import Text14 from "../../../../core/ui/text/14/Text14";

const SignUp = ({className}) => {
    return (
        <form className={[clAuth.block, className].join(" ")}>
            <H2 className={clAuth.title}>Регистрация</H2>

            <div className={clAuth.listFields}>
                <InputDefault
                    title="Как к вам обращаться"
                    image={emailSVG} type="text" placeholder="Егор Кринж" id="login" required/>
                <InputDefault
                    title="Электронная почта (Email)"
                    image={emailSVG} type="email" placeholder="fuji@yandex.ru" id="email" required/>
                <InputDefault
                    title="Придумайте пароль"
                    image={lockSVG} type="password" placeholder="Пароль" id="password" required />
                <InputDefault
                    title="Повторите пароль"
                    image={lockSVG} type="password" placeholder="Повтор пароля" id="repeat-password" required />
            </div>

            <ButtonFillRadiusPurple type="submit" className={clAuth.submit}>Зарегистрироваться</ButtonFillRadiusPurple>

            <Text14 className={clAuth.navDescription}>
                Есть аккаунт?
                <LinkPurple to="/signin" className={clAuth.navDescription__link}>Войти</LinkPurple>
            </Text14>
        </form>
    );
};

export default SignUp;