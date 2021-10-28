const fetchBreeds = async () => {

    const url = 'https://api.thedogapi.com/v1/breeds';
    const response = await fetch(url);
    const data = await response.json();

    const infoBreeds = data.map(breed => {
        return {
            id: breed.id,
            name: breed.name,
            image: breed.image.url
        }
    })

    console.log(infoBreeds);

    return infoBreeds;
}

export default fetchBreeds;