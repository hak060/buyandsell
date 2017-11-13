import React from 'react';
import Email from './Email.js';
import SingleEntry from './SingleEntry.js';
const FontAwesome = require('react-fontawesome');

const ItemEntry = (props) => {

    return (
        <div className='item-wrapper'>
            {console.log(props.clicked)}
            {(props.clicked ? (
                <div>
                    <h2 className='item-header' onClick={ () => {props.select(props.item)} }>{props.item.item_name}</h2>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={props.item.image_url} className='item-img'/>
                        </div>
                        <div className='col-lg-8'>
                            <p className='item-location'> {props.item.location}</p>
                            <p className='item-description'>{props.item.description}</p>
                            <p><i className="fa fa-usd" aria-hidden="true"></i>{props.item.price}</p>
                            <p className='item-type-wrapper'><span className='item-type'>Type:</span> {props.item.type}</p>
                            <p className='email-seller-header'>{props.item.owner_email}</p>
                            <Email email={props.email} item={props.item} />
                        </div>
                    </div>
                </div>
                ) :                 
                <div>
                    <h2 className='item-header' onClick={ () => {props.select(props.item)} }>{props.item.item_name}</h2>
                    <div className='col-lg-6'>
                        <img src={props.item.image_url} className='item-img'/>
                    </div>
                    <div className='col-lg-6'>
                        <p><span className='item-location'>Location:</span> {props.item.location}</p>
                        <p>{props.item.description}</p>
                        <p><i className="fa fa-usd" aria-hidden="true"></i>{props.item.price}</p>
                        <p><span className='item-type'>Type:</span> {props.item.price}</p>
                        <p className='email-seller-header'>{props.item.owner_email}</p>
                    </div>
                </div>        
            )}
        </div>
    )
}

export default ItemEntry;