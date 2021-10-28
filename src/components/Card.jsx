import React from 'react'

export const Card = ({ dog, updateDog }) => {
    
    return (
        <div className="card" onClick={() => updateDog(dog.id)}>
            <img 
                src={dog.image}
                alt="Dog" 
            />
            <p>{dog.name}</p>
        </div>
    )
}
   