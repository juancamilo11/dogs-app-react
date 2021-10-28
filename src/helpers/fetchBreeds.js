const fetchBreeds = async () => {

    const url = 'https://api.thedogapi.com/v1/breeds';
    const response = await fetch(url);
    
    if(!response.ok) {
        const {url, status, statusText} = response;
        throw Error(`${status} -> ${statusText} in fetch ${url}`);
    }

    const data = await response.json();


    const infoBreeds = data.map(breed => {
        return {
            id: breed.id,
            name: breed.name,
            image: breed.image.url
        }
    })

    return infoBreeds;
}

export default fetchBreeds;