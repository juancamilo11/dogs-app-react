import React, { useEffect, useState } from 'react'
import fetchBreeds from '../helpers/fetchBreeds'

export const BreedSelect = () => {

    
    const [breeds, setBreeds] = useState([]);
    
    useEffect(() => {
        fetchBreeds()
            .then(breeds => {
                setBreeds(breeds);
            })
    }, []);

    return (
        <select>
        {
            breeds.map(breed => {
                return <option key={breed.id} value={breed.id}>{breed.name}</option>
            })
        }
        </select>
    )
}