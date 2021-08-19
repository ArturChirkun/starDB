import React, { Component } from 'react';
import Row from '../row';
import { PlanetDetails } from '../sw-components';
import { PlanetList } from '../sw-components/item-lists';


export  class  PlanetPage extends Component {

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
            <Row left = {<PlanetList onItemSelected = {this.onItemSelected} />} 
            
                right = {<PlanetDetails itemId = {itemSelected}/>} />
        );
    }
};