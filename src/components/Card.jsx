import React from 'react'
import { Loader } from './Loader';

export const Card = ({ dog, updateDog, loading, error }) => {
    
    if(error) return(<small className="error">{error}</small>);

    if(loading) return (<Loader />);

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
   