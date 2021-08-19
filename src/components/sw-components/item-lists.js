import React from "react";

import {withData , withSwapiServices} from '../with-data';
import ItemList from "../item-list/item-list.js";


const withChildFunction =( fn ) => ( Wrapped ) => {
     return((props) => {
          return (
               <Wrapped {...props}>
                    {fn}
               </Wrapped>
          );
     });
}

const mapPersonMethodsToProps = (swapiService) => {
     return {
          getData : swapiService.getAllPeople
     }
};
const mapPlanetMethodsToProps = (swapiService) => {
     return {
          getData : swapiService.getAllPlanets
     }
};
const mapStarShipMethodsToProps = (swapiService) => {
     return {
          getData : swapiService.getAllStarShips
     }
};

const renderName = ({name , gender}) => <span> {name} ({gender}) </span>;
const renderPlanetName = ({name, diameter}) => <span>{name} ({diameter})</span>

const PersonList =  withSwapiServices(mapPersonMethodsToProps)( 
                         withData(
                              withChildFunction(renderName)
                                   (ItemList)));
                                                  
 

const PlanetList = withSwapiServices(mapPlanetMethodsToProps)(
                         withData(
                              withChildFunction(renderPlanetName) 
                                   (ItemList )));


const StarshipList = withSwapiServices(mapStarShipMethodsToProps) 
                              ( withData(ItemList));


export {
PersonList,
PlanetList,
StarshipList
};