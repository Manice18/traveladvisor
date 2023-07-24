import React from 'react'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

export default function Map() {

    return (
        <div className='col-span-2 md:col-span-1 h-[200px] '>
            {/* <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={coordinations}
                    center={coordinations}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={''}
                    onChange={''}
                    onChildClick={''}
                ></GoogleMapReact> */}
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='w-full h-[20rem]'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

