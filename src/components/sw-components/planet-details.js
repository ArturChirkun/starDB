import React from 'react';

import ItemInfo from '../item-info';
import { Record } from '../item-info/item-info';
import { withSwapiServices } from '../with-data';

const PlanetDetails = (props) => {

    return (

        <ItemInfo {...props}>
                
            <Record field = 'population' label = 'Population' /> 
            <Record field = 'rotationPeriod' label = 'Rotation period' />
            <Record field = 'diameter' label = 'Diamiter' />
                
        </ItemInfo >
     );

};

const mapMethodsToProps = (swapiService) => {
    return {
            getData: swapiService.getPlanet,
            getImage: swapiService.getPlanetImage
        }
    
};
export default withSwapiServices(mapMethodsToProps)(PlanetDetails);