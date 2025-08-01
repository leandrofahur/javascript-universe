import React from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = ({monsters}) => {
    console.log(monsters)
    return (
        <div className="card-list-container">
            {monsters.map(({name, email, id}, index) => (
                <Card key={`${name}-${index}`} name={name} email={email} id={id} />
            ))}
        </div>
    )
}

export default CardList