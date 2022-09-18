import React, {Component} from 'react';
import cl from './_SideBar.module.scss'

import homeDefaultSVG from './static/home-fill-gray.svg'
import homeActiveSVG from './static/home-fill-white.svg'

import bookDefaultSVG from './static/book-fill-gray.svg'
import bookActiveSVG from './static/book-fill-white.svg'

import libraryDefaultSVG from './static/library-fill-gray.svg'
import libraryActiveSVG from './static/library-fill-white.svg'

import addDefaultSVG from './static/add-fill-gray.svg'
import addActiveSVG from './static/add-fill-white.svg'

import LogoWeight from "../../../../../../../core/ui/logo/weight/LogoWeight";
import SideBarNav from "./components/side_bar_nav/SideBarNav";
import {createCollection, getCollectionProfile} from "../../../../../api/collectionAPI";
import SideBarCollection from "./components/side_bar_collection/SideBarCollection";
import {BASE_URL} from "../../../../../../../core/api/mainAPI";

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeId: props.activeId,
            sideBarData: [
                {
                    imageDefault: homeDefaultSVG,
                    imageActive: homeActiveSVG,
                    title: 'Моё обучение',
                    to: '/',
                    id: 'myStudying',
                },
                {
                    imageDefault: bookDefaultSVG,
                    imageActive: bookActiveSVG,
                    title: 'Каталог',
                    to: '/',
                    id: 'catalog',
                },
                {
                    imageDefault: libraryDefaultSVG,
                    imageActive: libraryActiveSVG,
                    title: 'Архив',
                    to: '/',
                    id: 'archive',
                }
            ],
            error: false,
            isLoaded: false,
            collectionList: [],
        }
    }

    componentDidMount() {
        getCollectionProfile()
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        collectionList: result.results.reverse()
                    })
                },
                () => {
                    this.setState({
                        isLoaded: true,
                        error: true
                    })
                }
            )
    }

    createCollection = async () => {
        const res = await createCollection()
        const newCollection = {
            title: res.title,
            path: res.path,
            image_url: res.image_url,
        }
        this.setState({
            collectionList: [newCollection, ...this.state.collectionList]
        })
    }


    render() {
        const {error, collectionList, sideBarData} = this.state;

        let collectionListHTML = [];
        if (!error) {
            collectionListHTML = collectionList.map(
                item => (
                    <SideBarCollection key={item.path} to={item.path} image={BASE_URL + item.image_url}
                                       title={item.title}/>
                )
            );
        }

        return (
            <div className={cl.block}>
                <div className={cl.wrapper}>
                    <LogoWeight className={cl.logo}/>

                    <div className={cl.menu}>
                        {sideBarData.map((item) =>
                            <SideBarNav
                                imageDefault={item.imageDefault} imageActive={item.imageActive}
                                title={item.title} to={item.to} key={item.id} active={item.id === this.props.activeId}/>
                        )}
                    </div>

                    <SideBarNav
                        imageDefault={addDefaultSVG} imageActive={addActiveSVG}
                        title='Создать подборку' to='/' className={cl.createCollection}
                        onClick={this.createCollection}
                    />
                    <div className={cl.collectionLine}/>
                    <div className={cl.collectionList}>
                        {collectionListHTML}
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
