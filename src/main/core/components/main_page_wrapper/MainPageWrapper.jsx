import React, {Component} from 'react';
import cl from "./_MainPageWrapper.module.scss";
import SideBar from "./core/components/side_bar/SideBar";
import TopBar from "./core/components/top_bar/TopBar";
import {isLogin} from "../../../../core/api/mainAPI";
import {Navigate} from "react-router";

class MainPageWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            addedCollectionList: props.collectionList,
            setAddedCollectionList: props.setCollectionList,
            lastLength: props.collectionList.length
        }
    }

    render() {

        if (!isLogin()) {
            return <Navigate to='/signin' replace/>
        }

        return (
            <div className={cl.page}>
                {/*<SideBar activeId='catalog' {...propsSideBar}/>*/}
                <SideBar activeId='catalog' setCollectionList={this.props.setCollectionList}
                         collectionList={this.props.collectionList}/>
                <div className={cl.main}>
                    <div className={cl.mainWrapper}>
                        <TopBar/>
                        <div className={[cl.mainContent, this.props.className].join(" ")}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPageWrapper;