const fetchRandomDog = async (breadId = 0) => {

    let urlImage;

    if(!breadId || breadId === 0) {
        urlImage = 'https://api.thedogapi.com/v1/images/search';
    } else {
        urlImage = `https://api.TheDogAPI.com/v1/images/search?breed_ids=${breadId}`;
    }
    const response = await fetch(urlImage);
    let data = await response.json();
    
    data = data[0];

    const infoDog = {
        id: data.breeds[0]?.id || 0,
        name: data.breeds[0]?.name || "No breed found",
        image: data.url
    }
    
    return infoDog;
}

export default fetchRandomDog;