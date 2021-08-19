import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemInfo from '../item-info/item-info';
import ErrorBoundry from '../error-boundry';
import './people-page.css';
import SwapiService from '../../services/swapi-services';
import Row from '../row';



export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        personSelected : 4
    };



    onPersonSelected = (id) => {
        this.setState({
            personSelected: id
        })
    }

    onClickButton = () => {
        this.foo.bar = 0;
    }

    render() {


        const itemList =( <ItemList onPersonSelected = {this.onPersonSelected} 
                        getData = {this.swapiService.getAllPeople}
                        renderItem = {({name, gender, birthYear}) => 
                        `${name} (${gender}, ${birthYear})`} />);

        const peopleInfo = (
            <ErrorBoundry>
                <ItemInfo itemId = {this.state.personSelected} />
            </ErrorBoundry>);

        return (
            <Row left = {itemList} right = {peopleInfo} />
        );
    };
}