"use client"
import { useState, useRef, useEffect } from 'react'
import { RiCalendarEventFill } from "react-icons/ri"
import { IoMdSearch } from "react-icons/io"
import { MdLocationOn } from "react-icons/md"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import Filter from './Filter'
import { useLocationStore } from '@/utils/dataStore'
import axios from 'axios'
import { hotelDetails } from '@/network/location'

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
    q: "",
    format: "json",
    addressdetails: "addressdetails",
};


export default function Navbar({ children }) {
    const [searchData, setSearchData] = useState(null)
    const [options, setoptions] = useState(null)
    const searchTextRef = useRef(null)
    const search = () => {
        return searchTextRef.current.value
    }
    const [date, setDate] = useState()
    const handleChange = (startDate) => {
        setDate(startDate);
        updateHotelDate(new Date(startDate).toLocaleDateString().split("/").reverse().join("-"))
    };
    const location = useLocationStore(state => state.location)
    const updateLocation = useLocationStore(state => state.updateLocation)

    const mainLocationCoordinates = useLocationStore(state => state.mainLocationCoordinates)

    const attractions = useLocationStore(state => state.attractions)
    const attractionCoordinates = useLocationStore(state => state.attractionCoordinates)

    const updateHotelCoordinates = useLocationStore(state => state.updateHotelCoordinates)
    const hotelsCoordinates = useLocationStore(state => state.hotelsCoordinates)

    const updateHotelDate = useLocationStore(state => state.updateHotelDate)
    const hotelDate = useLocationStore(state => state.hotelDate)

    useEffect(() => {
        setoptions(attractions)
        console.log(attractions.length)
    }, [attractions])

    useEffect(() => {
        date !== undefined ? hotelDetails(mainLocationCoordinates[0].latitude, mainLocationCoordinates[0].longitude, hotelDate).then((res) => res.data.map((data) => {
            updateHotelCoordinates(data.latitude, data.longitude)
        })) : ""
    }, [date])

    return (
        <div>
            <div className='fixed flex top-0 w-full bg-white h-20 md:justify-between py-4 px-3 border-b-2 border-gray-300'>
                <div type="button" className='rounded-full border-[3px] border-gray-300 w-[9rem] flex items-center justify-center space-x-1 hover:bg-slate-200 cursor-pointer hover:border-gray-800'>
                    <RiCalendarEventFill />
                    <div>
                        <DatePicker selected={date} onChange={(startdate) => {
                            handleChange(startdate)
                        }}
                            placeholderText='Enter Date' className='w-[5.5rem] px-0 m-0 placeholder:text-black placeholder:text-base placeholder:font-medium font-medium bg-inherit focus-within:outline-none'
                        />
                    </div>
                </div>
                <div className='flex w-[50%] items-center space-x-3 rounded-full shadow-lg shadow-gray-400 pl-3 focus-within:w-[60%] justify-between relative'>
                    <IoMdSearch size={20} />
                    <input
                        type='text'
                        placeholder='Where to ?'
                        className='focus:outline-none w-[90%] bg-inherit placeholder:text-md placeholder:font-medium text-gray-700 font-medium'
                        ref={searchTextRef}
                    />
                    <button
                        className='h-full w-11 rounded-r-full bg-slate-200 text-sm font-medium hover:border-2 hover:border-black'
                        onClick={async () => {
                            const mytext = search()
                            const params = {
                                q: mytext,
                                format: "json",
                                addressdetails: 1,
                                polygon_geojson: 0
                            };
                            const queryString = new URLSearchParams(params).toString();
                            const requestOptions = {
                                method: 'GET',
                                redirect: 'follow'
                            };
                            const res = await axios.get(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                            // console.log(res.data)
                            setSearchData(res.data)
                        }}
                    >
                        Go
                    </button>
                    {
                        searchData && <ul className='flex flex-col absolute top-0 mt-11 w-[83%] bg-white space-y-2 px-2'>
                            {
                                searchData.map((data) => (
                                    <li key={data.place_id} className='flex hover:bg-gray-200 cursor-pointer space-x-2 '
                                        onClick={() => {
                                            updateLocation(data.display_name)
                                            setSearchData(null)
                                        }}>
                                        <MdLocationOn size={20} />
                                        <p className='text-sm font-medium w-[80%]'>{data.display_name}</p></li>
                                ))
                            }
                        </ul>
                    }

                </div>

                <div className='flex space-x-3 text-base font-medium '>
                    <Filter />
                    <Select placeholder="Attractions" className='md:h-[45px] md:w-[9rem] 6rem '
                        options={options} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                backgroundColor: "inherit",
                                borderWidth: "3px",
                                borderRadius: "9999px",
                                borderColor: state.isFocused ? 'black' : 'black',
                                cursor: 'pointer'
                            }),
                            placeholder: (base) => ({
                                ...base,
                                fontWeight: 500,
                                color: "#000"
                            }),
                        }} />
                </div>
            </div>
            <main className='w-full'>{children}</main>
        </div>
    )
}
