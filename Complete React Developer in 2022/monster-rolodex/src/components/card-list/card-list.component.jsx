import React from 'react'
import './card-list.style.css'
import { Card } from '../card/card.component'

export const CardList = props => (
    <div className='card-list'>
        { props.mascotas.map(mascota => (
             <Card key={mascota.id} mascota={mascota}/>
        ))}
    </div>
);