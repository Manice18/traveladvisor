"use client"
import { useState } from 'react'

const Filter = () => {
    const [hide, setHide] = useState(true)
    const handleHide = () => {
        setHide((prev) => !prev)
    }
    const handleChangeResturants = event => {
        if (event.target.checked) console.log(event.target.value)

    };
    const handleChangeHotels = event => {
        if (event.target.checked) {
            console.log(event.target.value)
        }
    };

    return (
        <div className="w-[5rem]">

            <button type="button" className="flex w-[5rem] items-center justify-center bg-white px-2 py-2 text-gray-400 hover:text-gray-400 border-[3px] rounded-full border-gray-300 hover:border-black h-[43px]"
                onClick={handleHide}>
                <span className="font-medium text-gray-900 ">Filters</span>
            </button>
            <div className={`p-2 border-2 border-gray-400 w-[10rem] bg-white rounded-lg mt-2 ${hide ? "hidden" : ""}`} id="filter-section-mobile-1">
                <div className="space-y-6 ">
                    <div className="flex items-center">
                        <input id="filter-mobile-category-0" name="category[]" value="Resturants" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" onChange={handleChangeResturants} />
                        <label htmlFor="filter-mobile-category-0" className="ml-3 min-w-0 flex-1 text-gray-500">Resturants</label>
                    </div>
                    <div className="flex items-center">
                        <input id="filter-mobile-category-1" name="category[]" value="Hotels" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" onChange={handleChangeHotels} />
                        <label htmlFor="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Hotels</label>
                    </div>
                    <div className="flex items-center">
                        <input id="filter-mobile-category-1" name="category[]" value="Flights" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label htmlFor="filter-mobile-category-1" className="ml-3 min-w-0 flex-1 text-gray-500">Flights</label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Filter