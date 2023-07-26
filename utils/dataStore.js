import { create } from 'zustand';

export const useLocationStore = create((set, get) => ({
    hotelDate: "",
    hotelsCoordinates: [],
    mainLocationCoordinates: [],
    attractions: [],
    attractionCoordinates: [],
    location: "",
    updateLocation: (newLocation) => {
        const amountState = get().location
        set({ location: newLocation + amountState })
    },
    updateHotelDate: (newDate) => {
        const dateSate = get().hotelDate
        set({ hotelDate: newDate + dateSate })
    },
    updateAttractions: (newAttraction) => {
        set((state) => ({
            attractions: [
                ...state.attractions,
                {
                    value: newAttraction,
                    label: newAttraction
                }
            ]
        }))
    },
    updateAttractionCoordinates: (newCoordinatesLati, newCoordinatesLongi) => {
        set((state) => ({
            attractionCoordinates: [
                ...state.attractionCoordinates,
                {
                    latitude: newCoordinatesLati,
                    longitude: newCoordinatesLongi
                }
            ]
        }))
    },
    updateMainLocationCoordinates: (newCoordinatesLati, newCoordinatesLongi) => {
        set((state) => ({
            mainLocationCoordinates: [
                ...state.mainLocationCoordinates,
                {
                    latitude: newCoordinatesLati,
                    longitude: newCoordinatesLongi
                }
            ]
        }))
    },
    updateHotelCoordinates: (newCoordinatesLati, newCoordinatesLongi) => {
        set((state) => ({
            hotelsCoordinates: [
                ...state.hotelsCoordinates,
                {
                    latitude: newCoordinatesLati,
                    longitude: newCoordinatesLongi
                }
            ]
        }))
    },
}));
