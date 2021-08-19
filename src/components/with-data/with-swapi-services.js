import React from 'react';
import { SwapiServicesConsumer } from '../swapi-services-context';

const withSwapiServices =( mapMethodsToProps ) => ( Wrapped ) => {

    return (props) => {
        return  (
            <SwapiServicesConsumer>
                {
                   (swapiService) => {
                       const serviceProps = mapMethodsToProps(swapiService);
                       return (
                        <Wrapped {...props} {...serviceProps}  />
                       )
                    }
                }
            </SwapiServicesConsumer>
        );

    }
};

export {withSwapiServices};