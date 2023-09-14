import React from 'react'
import './Card.css'

function Card(props) {

    function deleteCard(e) {
        props.deleteCards(e.target.getAttribute("data-key"));
    }

    return (
        <>
            <div className='card'>
                <div className='card-title'>{props.title}</div>
                <div className='card-footer'>
                    <div className='card-tag'>{props.tag}</div>
                    <div onClick={deleteCard} data-key={props.keys} className='delete-card'>Delete</div>
                </div>
            </div>
        </>
    )
}

export default Card