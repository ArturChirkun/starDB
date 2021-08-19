import React, { Component } from 'react';
import Row from '../row';
import { PersonDetails } from '../sw-components';
import { PersonList } from '../sw-components/item-lists';


export class  PeoplePage extends Component {

    state = {
        itemSelected : null
    }
    
    onItemSelected = (id) => {
        this.setState ({
            itemSelected : id
        })
    }

    render() {

        const {itemSelected} = this.state;
        return (
            <Row left = {<PersonList onItemSelected = {this.onItemSelected} />} 
            
                right = {<PersonDetails itemId = {itemSelected}/>} />
        );
    }
};