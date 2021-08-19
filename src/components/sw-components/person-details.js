import React from 'react';

import ItemInfo from '../item-info';
import { Record } from '../item-info/item-info';
import {withSwapiServices} from '../with-data';

const PersonDetails = (props) => {
        return (
            <ItemInfo {...props}>
                
             <Record field = 'gender' label = 'Gender' /> 
              <Record field = 'eyeColor' label = 'Eye color' />
                
            </ItemInfo>
        );
};
 
const mapMethodsToProps = (swapiService) => {
    return {
            getData: swapiService.getPerson,
            getImage: swapiService.getPersonImage
        }
    
};
export default withSwapiServices(mapMethodsToProps)(PersonDetails);
