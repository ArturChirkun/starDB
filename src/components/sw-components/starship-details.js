import React from 'react';

import ItemInfo from '../item-info';
import { Record } from '../item-info/item-info';
import { withSwapiServices } from '../with-data';





const StarshipDetails = ({itemId, swapiService}) => {
    const {getStarShipImage, getStarShip} = swapiService;
    return (

                        <ItemInfo
                        itemId = {itemId} 
                        getData = {getStarShip} 
                        getImage = {getStarShipImage}>
                
                        <Record field = 'model' label = 'Model' /> 
                        <Record field = 'length' label = 'Length' />
                
                    </ItemInfo > 
            );
};


export default withSwapiServices(StarshipDetails);