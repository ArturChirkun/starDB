import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import Error from '../error';
import SwapiService from '../../services/swapi-services';
import DummySwapiService from '../../services/dummy-swapi-services';
import { SwapiServicesProvider } from '../swapi-services-context';
import {PeoplePage, PlanetPage} from '../pages';

export default class App extends Component  {

    state = {
        personSelected : null,
        error : false,
        swapiService : new SwapiService()
    };

    onContextChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

            console.log(Service.name);
            return {
                swapiService : new Service()
            };
        });
    };

    componentDidCatch() {
        this.setState({ 
            error : true
        });
    }

    onPersonSelected = (id) => {
        this.setState({
            personSelected: id
        })
    }

    render() {
         
        if (this.state.error) {
            return <Error />
        }

    return (
        <div className='app'>
        <SwapiServicesProvider value = {this.state.swapiService}>
            <Header onContextChange = {this.onContextChange} />
            <RandomPlanet /> 
            <PeoplePage />
            <PlanetPage />
        </SwapiServicesProvider>
        </div>

    );
}
}

