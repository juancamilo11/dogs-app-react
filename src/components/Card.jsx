import React from 'react'

export const Card = ({ dog, updateDog, loading }) => {
    
    if(loading) return (<h1 className="loading-text">Loading a dog...</h1>);

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
   