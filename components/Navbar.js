"use client"
import React, { useState, Fragment, useRef } from 'react'
import { RiCalendarEventFill } from "react-icons/ri"
import { IoMdSearch } from "react-icons/io"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select'
import Filter from './Filter'
import { useBookStore } from '@/utils/dataStore'
import axios from 'axios'

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
    q: "",
    format: "json",
    addressdetails: "addressdetails",
};

export default function Navbar({ children }) {
    const searchTextRef = useRef(null)
    const search = () => {
        return searchTextRef.current.value
    }
    const [date, setDate] = useState()
    const handleChange = (startDate) => {
        setDate(startDate);
    };


    const options = [
        { value: "blues", label: "Blues" },
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" },
    ];
    return (
        <div>
            <div className='fixed flex top-0 w-full bg-white h-20 md:justify-between py-4 px-3 border-b-2 border-gray-300'>
                <div type="button" className='rounded-full border-[3px] border-gray-300 w-[9rem] flex items-center justify-center space-x-1 hover:bg-slate-200 cursor-pointer hover:border-gray-800'>
                    <RiCalendarEventFill />
                    <div>
                        <DatePicker selected={date} onChange={(startdate) => handleChange(startdate)}
                            placeholderText='Enter Date' className='w-[5.5rem] px-0 m-0 placeholder:text-black placeholder:text-base placeholder:font-medium font-medium bg-inherit focus-within:outline-none'
                        />
                    </div>
                </div>
                <div className='flex w-[50%] items-center space-x-3 rounded-full shadow-lg shadow-gray-400 pl-3 focus-within:w-[60%] justify-between'>
                    <IoMdSearch size={20} />
                    <input
                        type='text'
                        placeholder='Where to ?'
                        className='focus:outline-none w-[90%] bg-inherit placeholder:text-md placeholder:font-medium text-gray-700 font-medium'
                        ref={searchTextRef}
                    />
                    <button
                        className='h-full w-11 rounded-r-full hover:bg-slate-200 text-sm font-medium hover:border-2 hover:border-black'
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
                            console.log(res.data)
                        }}
                    >
                        Go
                    </button>
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

                    {/* </div> */}
                </div>
            </div>
            <main className='w-full'>{children}</main>
        </div>
    )
}
