import React, {useRef, useState} from 'react';
import {getImage} from "../../../../../../../../../core/api/mainAPI";
import cl from './_UserNav.module.scss'
import List from "../../../../../../../../../core/components/list/list/List";
import LinkListItem from "../../../../../../../../../core/components/list/list_item/list_item_link/LinkListItem";
import Text16B from "../../../../../../../../../core/ui/text/16/bold/Text16B";
import useOutsideAlerter from "../../../../../../../../../core/service/outsideOnClick";
import {logout} from "../../../../../../../../../auth/api/authAPI";

const UserNav = ({className}) => {

    const imageUser = getImage(sessionStorage.getItem('avatarUrl'));

    const listMenu = [
        {
            title: 'Преподавание',
            to: '#',
        },
        {
            title: 'Настройки',
            to: '#',
        },
    ]

    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        setIsVisible(!isVisible)
    }

    const box = useRef(null);
    useOutsideAlerter(box, setIsVisible);
    return (
        <div ref={box} className={[cl.user, className].join(' ')}>
            <img src={imageUser} alt="icon" className={cl.userImage} onClick={handleClick}/>
            <List className={[cl.menu, isVisible ? cl.menuActive : ""].join(" ")}>
                <LinkListItem to='/'>
                    <Text16B className={cl.menuUsername}>{sessionStorage.getItem('username')}</Text16B>
                    <img src={imageUser} alt="icon" className={cl.userImage}/>
                </LinkListItem>
                {listMenu.map(item =>
                    <LinkListItem to={item.to} title={item.title} />
                )}

                <LinkListItem to='/signin' title='Выйти' onClick={logout} className={cl.menuSignOut} />
            </List>
        </div>
    );
};

export default UserNav;