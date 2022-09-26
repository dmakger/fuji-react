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
        this.updateCollectionList()
        this.updateCatalogList()
    }

    updateCatalogList = () => {
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

    updateCollectionList = () => {
        getCollectionProfile()
            .then((result) => {
                this.setAddedCollectionList(result.results)
            }, () => {
                this.setState({
                    error: true
                })
            })
    }

    setAddedCollectionList = (list) => {
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
                               path={item.path}
                               title={item.title}
                               image={item.image_url}
                               author={item.author}
                               rating={item.rating}
                               courses={item.courses}
                               addedCollectionList={addedCollectionList}
                               setAddedCollectionList={this.setAddedCollectionList} />
            ));
        }

        return (
            <MainPageWrapper className={cl.block} collectionList={addedCollectionList} setCollectionList={this.setAddedCollectionList} >
                {collectionListHTML}
            </MainPageWrapper>
        );
    }
}

export default Catalog;