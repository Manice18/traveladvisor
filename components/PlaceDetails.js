import { useEffect, useState } from 'react'
import RangeSlider from './RangeSlider'
import { useLocationStore } from '@/utils/dataStore'
import { attractionDetails, locationDetails } from '@/network/location'

const PlaceDetails = () => {
    const [range, setRange] = useState(0)
    const [placeDetails, setPlaceDetails] = useState([{}])

    const location = useLocationStore(state => state.location)
    const updateAttractions = useLocationStore(state => state.updateAttractions)
    const updateAttractionCoordinates = useLocationStore(state => state.updateAttractionCoordinates)

    useEffect(() => {
        const coordinates = async () => {
            locationDetails(location).then((res) => {
                attractionDetails(res.data.Typeahead_autocomplete.results[0].detailsV2.geocode.latitude, res.data.Typeahead_autocomplete.results[0].detailsV2.geocode.longitude).then((res2) => {
                    console.log(res2.data)
                    setPlaceDetails(res2.data)

                    res2.data.filter((filteredData) => filteredData.hasOwnProperty('photo')).map((data) => updateAttractions(data.name, data.name))
                    res2.data.filter((filteredData) => filteredData.hasOwnProperty('photo')).map((data) => updateAttractionCoordinates(data.latitude, data.longitude))
                }).catch((err) => console.log(err))
            }).catch((err) => console.log(err))
        };
        coordinates()
    }, [location])

    return (
        <div className='col-span-2 md:col-span-1 h-full mx-2'>
            <div className="flex flex-col w-[220px] h-20 text-sm font-medium text-gray-700 bg-blue-100 pl-2 pr-5 py-2 space-y-6 rounded-md my-2">
                <div className='flex justify-between'>
                    <p>Distance</p>
                    <p>{range}KM</p>
                </div>
                <RangeSlider setRange={setRange} />
            </div>
            <div className='sm:h-full md:h-[74%]  md:overflow-auto scrollbar scroll-smooth '>
                <ul>
                    {
                        placeDetails.filter((filteredData) => filteredData.hasOwnProperty('photo')).map((value, index) => (
                            <div className='flex flex-col' key={index + 1}>
                                <li className='flex space-x-2 cursor-pointer hover:bg-gray-100'>
                                    <div className='w-[220px] h-[190px] bg-cover bg-no-repeat' style={{
                                        backgroundImage: `url(${value.photo.images.original.url})`,
                                    }} />
                                    <div className='flex flex-col space-y-3 font-custom1'>
                                        <p className='font-extrabold text-base text-black'>{index}.&nbsp;{value.name}</p>
                                        <p className='text-xs font-bold text-gray-400'>{value.num_reviews}</p>
                                        <p className='text-gray-500 font-bold tracking-tighter text-sm'>{value.location_string}</p>
                                    </div>
                                </li>
                                <hr className='border-[1px] border-gray-300 my-3 w-[70%]' />
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default PlaceDetails