import React, { useEffect, useState } from 'react'
import fetchBreeds from '../helpers/fetchBreeds'

export const BreedSelect = ({ updateDog }) => {

    const [breeds, setBreeds] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchBreeds()
            .then(breeds => {
                setBreeds(breeds);
                setError('');
            }).catch(err => {
                console.log(`Error: ${err}`)
                setError(`${err}`);
            })
    }, []);

    const handleChange = (e) => {
        updateDog(e.target.value);
    }

    return (
        <>
            <select onChange={ handleChange }>
            {
                breeds.map(breed => {
                    return <option key={breed.id} value={breed.id}>{breed.name}</option>
                })
            }
            </select>
            { error ?
                <small className="error">{error}</small>
            :
                <small className="text-indicator">Click on the image to get a new dog!</small>
            }
        </>
    )
}