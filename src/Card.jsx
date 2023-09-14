import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <>
            <div className='card'>
                <div className='card-title'>{props.title}</div>
                <div className='card-footer'>
                    <div className='card-tag'>{props.tag}</div>
                    <div className='delete-card'>Delete</div>
                </div>
            </div>
        </>
    )
}

export default Card