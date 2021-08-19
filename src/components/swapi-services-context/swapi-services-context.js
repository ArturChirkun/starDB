import React from 'react';

const { 
    Provider : SwapiServicesProvider,
    Consumer : SwapiServicesConsumer } = React.createContext();

export {
    SwapiServicesConsumer,
    SwapiServicesProvider
};