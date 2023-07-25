import axios from "axios";

const attractionDetails = async (lati, longi) => {
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
        params: {
            longitude: longi,
            latitude: lati,
            lunit: 'km',
            currency: 'USD',
            lang: 'en_US'
        },
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    };
    try {
        const response = await axios.request(options);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export {
    attractionDetails
}
