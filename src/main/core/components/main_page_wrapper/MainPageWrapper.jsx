import React from 'react';
import cl from "./_MainPageWrapper.module.scss";
import SideBar from "./core/components/side_bar/SideBar";
import TopBar from "./core/components/top_bar/TopBar";
import {isLogin} from "../../../../core/api/mainAPI";
import {Navigate} from "react-router";

const MainPageWrapper = ({children, className, ...props}) => {

    if (!isLogin()) {
        return <Navigate to='/signin' replace />
    }

    return (
        <div className={cl.page}>
            <SideBar activeId='catalog'/>
            <div className={cl.main}>
                <div className={cl.mainWrapper}>
                    <TopBar />
                    <div className={[cl.mainContent, className].join(" ")} {...props}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPageWrapper;