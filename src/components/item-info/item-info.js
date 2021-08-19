import React, { Component } from 'react';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner/index';

import './item-info.css';

const Record = ({item , field, label}) => {

    return (
        <li className='list-group-item'>
            <span className='term'> {label} </span>
             <span> {item[field]} </span>
        </li>
    );

};

export {
    Record
};

export default class ItemInfo extends Component {

    state = {
        item : null,
        loading : true,
        imageUrl : null
    };

    swapiServices = new SwapiService();

    componentDidMount() {
        this.onUpdateItem();
    }
    componentDidUpdate(prevProps) {
        if ((prevProps.itemId !== this.props.itemId) || (prevProps.getData !== this.props.getData))
            {
                this.onUpdateItem();
            }
    };

    onItemLoaded = (item) => {
        const {getImage} = this.props;
        this.setState({ 
            item : item,
            loading : false,
            imageUrl : getImage(item)
        });
    };

    onUpdateItem  ()  {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }
        this.setState({
            loading : true
        });
        getData(itemId)
            .then(this.onItemLoaded); 

    };


    render () {

        const {item, loading, imageUrl} = this.state;

        if (!this.state.item ) {
            return <span> Please, select a item </span>
        }

        const content = !loading ? <Content item = {item} imageUrl = {imageUrl}
                                            propsChildren = {this.props.children}/> : null;
        const spinner = loading ? <Spinner/> : null;

        return (
            <div className='item-details card'>
                {spinner}
                {content}
            </div>
        );
    }
}

const Content = (props) =>  {

    const {name} = props.item;
    const item = props.item;


    return ( 
        <React.Fragment>
             <img className='item-image'
                 // eslint-disable-next-line no-octal-escape
                 src={props.imageUrl} alt='People'></img>
                <div className='card-body'>
                <h1> {name} </h1> 
                <ul className='list-group list-group-flush'>    
                {React.Children.map(props.propsChildren, (child) => {
                   return React.cloneElement(child, { item });
                })}
                </ul> 
                </div>
        </React.Fragment>

    );
    };
