import axios from "axios";

const locationDetails = async (location) => {
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
        params: {
            query: location,
            lang: 'en_US',
            units: 'km'
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

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
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
    };
    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

const hotelDetails = async (lati, longi, date) => {
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
        params: {
            latitude: lati,
            longitude: longi,
            lang: 'en_US',
            limit: '30',
            adults: '1',
            currency: 'USD',
            checkin: date,
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export {
    attractionDetails,
    locationDetails,
    hotelDetails
}
