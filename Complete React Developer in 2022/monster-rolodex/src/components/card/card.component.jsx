import React from 'react'
import './card.style.css'

export const Card = (props) => (
    <div className="card-container">
        <img alt="masacotas" src={`https://robohash.org/${props.mascota.id}?set=set2&size=180x180`}></img>
        <h4>{props.mascota.name}</h4>
        <p>{props.mascota.mail}</p>
    </div>
);