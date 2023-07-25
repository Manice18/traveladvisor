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
            'X-RapidAPI-Key': '56ff7dbe85mshf4e10be4a6bbb3bp19ca00jsn9f92fcc09ea3',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
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