import React from 'react'

export const Card = ({dog}) => {
    return (
        <div className="card">
            <img 
                src={dog.image}
                alt="Dog image" 
            />
            <p>{dog.name}</p>
        </div>
    )
}
   