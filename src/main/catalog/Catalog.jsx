import React, {Component} from 'react';
import cl from './_Catalog.module.scss'

import MainPageWrapper from "../core/components/main_page_wrapper/MainPageWrapper";
import CollectionBig from "../../core/components/collection/big/CollectionBig";
import {getCatalog, getCollectionProfile} from "../core/api/collectionAPI";

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            collectionList: [],
            addedCollectionList: []
        }
    }

    componentDidMount() {
        this.setProfile()
        this.setCatalog()
    }

    setProfile() {
        getCollectionProfile()
            .then((result) => {
                this._setAddedCollectionList(result.results)
            }, () => {
                this.setState({
                    error: true
                })
            })
    }

    setCatalog() {
        getCatalog()
            .then((result) => {
                this.setState({
                    collectionList: result.results
                })
            }, () => {
                this.setState({
                    error: true
                })
            })
    }

    _setAddedCollectionList = (list) => {
        this.setState({
            addedCollectionList: list,
        })
    }

    render() {
        const {error, collectionList, addedCollectionList} = this.state;
        let collectionListHTML = [];
        if (!error) {
            collectionListHTML = collectionList.map(item => (
                <CollectionBig key={item.path}
                               collection={item}
                               addedCollectionList={addedCollectionList}
                               setAddedCollectionList={this._setAddedCollectionList} />
            ));
        }

        return (
            <MainPageWrapper className={cl.block} collectionList={addedCollectionList} setCollectionList={this._setAddedCollectionList} >
                {collectionListHTML}
            </MainPageWrapper>
        );
    }
}

export default Catalog;