import React from 'react'

export const Card = ({dog}) => {
    return (
        <div className="card">
            <img 
                src={dog?.image}
                alt="Dog image" 
            />
            <p>{dog.bread?.name}</p>
        </div>
    )
}
   