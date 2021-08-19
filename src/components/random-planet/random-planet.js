import React, { Component} from 'react';

import './random-planet.css';
import '../../services/swapi-services.js';
import Spinner from '../spinner/index';
import SwapiService from '../../services/swapi-services.js';
import Error from '../error';

export default class RandomPlanet extends Component  {

    swapi = new SwapiService();

    state = {
      planet : null,
      loading : true,
      error : false
    };


    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 100000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    onPlanetError = () => {
        this.setState({
            error : true,
            loading : false
        });
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet : planet,
            loading : false,
            error: false});
    }
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onPlanetError);
        
    }


    render () {
        const { planet , loading , error } = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <Error/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet = {planet} /> : null;


        return (
            <div className="random-planet card">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {

    const { id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
                <img className='planet-image'
                 // eslint-disable-next-line no-octal-escape
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='Planet'></img>
                <div className='card-body'>
                <h1>{name} </h1>
                <ul className='list-group list-group-flush'>    
                    <li className='list-group-item'>
                    <span className='term'> Population </span>
                    <span> {population} </span>
                    </li>
                    <li className='list-group-item'>
                    <span className='term'> Rotation period </span>
                    <span> {rotationPeriod} </span>
                    </li>
                    <li className='list-group-item'>
                    <span className='term'> Diamiter </span>
                    <span> {diameter} </span>
                    </li>
                    </ul> 
                </div>
        </React.Fragment>

    );
};