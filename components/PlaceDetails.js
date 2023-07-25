import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { data1 } from '@/constants'
import RangeSlider from './RangeSlider'
import { useBookStore } from '@/utils/dataStore'
import { attractionDetails } from '@/network/location'
import { backupLocationDetails } from '@/constants'

const PlaceDetails = () => {
    const [range, setRange] = useState(0)
    const [placeDetails, setPlaceDetails] = useState("")

    const [test, setTest] = useState([{}])

    const rawData = "Kolkata, West Bengal, India"

    // useEffect(() => {
    //     const testFunction = async () => {
    //         attractionDetails(backupLocationDetails[1].result_object.latitude, backupLocationDetails[1].result_object.longitude).then((res) => {
    //             console.log(res.data)
    //             setTest(res.data)
    //         }).catch((err) => console.log(err))
    //         // setTest(res)
    //     }
    //     testFunction()
    // }, [])

    return (
        <div className='col-span-2 md:col-span-1 min-h-screen mx-2'>
            <div className="flex flex-col w-[220px] h-20 text-sm font-medium text-gray-700 bg-blue-100 pl-2 pr-5 py-2 space-y-6 rounded-md my-2">
                {/* <p onClick={() => {
                    console.log("test data: " + test[0].name)
                }}>HI there</p> */}
                <div className='flex justify-between'>
                    <p>Distance</p>
                    <p>{range}KM</p>
                </div>
                <RangeSlider setRange={setRange} />
            </div>
            <div className='sm:h-full md:h-[74%]  md:overflow-auto scrollbar scroll-smooth'>
                <ul>
                    {
                        data1.map((value) => (
                            <div className='flex flex-col' key={value.id}>
                                <li className='flex space-x-2'>
                                    <div className='w-[220px] h-[190px] bg-cover bg-no-repeat' style={{
                                        backgroundImage: `url(${value.image})`,
                                    }} />
                                    {/* <Image src={value.image} alt={value.name} width={200} height={200} /> */}
                                    <div className='flex flex-col space-y-3 font-custom1'>
                                        <p className='font-extrabold text-base text-black'>{value.id}.&nbsp;{value.name}</p>
                                        <p className='text-xs font-bold text-gray-400'>{value.numRev}</p>
                                        <p className='text-gray-500 font-bold tracking-tighter text-sm'>{value.location}</p>
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