const fetchRandomDog = async () => {

    const url = 'https://api.thedogapi.com/v1/images/search';
    const response = await fetch(url);
    const data = await response.json();
    return data[0];
}

export default fetchRandomDog;