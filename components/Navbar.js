"use client"
import React, { useState, Fragment } from 'react'
import { RiCalendarEventFill } from "react-icons/ri"
import { IoMdSearch } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link';
import Select from 'react-select'
import Filter from './Filter'

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar({ children }) {
    const [date, setDate] = useState()
    const handleChange = (startDate) => {
        console.log(startDate)
        setDate(startDate);
        // setEndDate(endDate);
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
                <div type="button" className='rounded-full border-[3px] border-gray-300 w-[9rem] flex items-center justify-center space-x-1 hover:bg-gray-100 cursor-pointer hover:border-gray-800'>
                    <RiCalendarEventFill />
                    <div>
                        <DatePicker selected={date} onChange={(startdate) => handleChange(startdate)}
                            placeholderText='Enter Date' className='w-[5.5rem] px-0 m-0 placeholder:text-black placeholder:text-base placeholder:font-medium font-medium bg-inherit focus-within:outline-none'
                        />
                    </div>
                </div>
                <div className='flex w-[50%] items-center space-x-3 rounded-full shadow-lg shadow-gray-400 px-3 focus-within:w-[60%]'>
                    <IoMdSearch size={20} />
                    <input
                        type='text'
                        placeholder='Where to ?'
                        className='focus:outline-none w-[90%] bg-inherit placeholder:text-md placeholder:font-medium text-gray-700 font-medium'
                    />
                </div>
                <div className='flex space-x-3 text-base font-medium z-50'>
                    {/* <div className=' rounded-full border-[3px] border-gray-300 w-[5rem] flex items-center justify-center hover:bg-gray-100 hover:border-gray-800 cursor-pointer ml-10 md:ml-0'>Filters</div> */}
                    <Filter />
                    <Select placeholder="Attractions"
                        options={options} styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                height: "45px",
                                width: "9rem",
                                backgroundColor: "inherit",
                                borderWidth: "3px",
                                borderRadius: "9999px",
                                borderColor: state.isFocused ? 'black' : 'black',
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
