import React, { useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
// import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import L from "leaflet"

import { MapContainer, Marker, Popup, TileLayer, ZoomControl, useMap } from 'react-leaflet'
import { data1 } from '@/constants'
import Description from './Description'

export default function Map() {
    // const [global, setGlobal] = useState(null)
    var global = useRef()
    function LocationMarker() {
        const [position, setPosition] = useState(null);
        const [bbox, setBbox] = useState([]);

        const map = useMap();

        useEffect(() => {
            map.locate().on("locationfound", function (e) {
                setPosition(e.latlng);
                // setGlobal(e.latlng)
                console.log(e.latlng)
                global = e.latlng
                map.flyTo(e.latlng, map.getZoom());
                const radius = e.accuracy;
                const circle = L.circle(e.latlng, radius);
                circle.addTo(map);
                setBbox(e.bounds.toBBoxString().split(","));
            });
        }, [map]);

        return position === null ? null : (
            <Marker position={position} icon={myIcon}>
                <Popup>
                    You are here. <br />
                    Map bbox: <br />
                    <b>Southwest lng</b>: {bbox[0]} <br />
                    <b>Southwest lat</b>: {bbox[1]} <br />
                    <b>Northeast lng</b>: {bbox[2]} <br />
                    <b>Northeast lat</b>: {bbox[3]}
                </Popup>
            </Marker>
        );
    }
    var hotelIcon = L.icon({
        iconUrl: 'hotels.svg',
        iconSize: [30, 80],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    })
    var locationIcon = L.icon({
        iconUrl: 'location.svg',
        iconSize: [50, 90],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    })
    return (
        <div className='col-span-2 md:col-span-1 h-[74%] z-[1] relative'>
            <MapContainer center={[12.235588, 109.19553]} zoom={18} scrollWheelZoom={true} className='w-full min-h-screen' zoomControl={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <LocationMarker /> */}
                <ZoomControl position='topright' />
                <Marker position={[12.235588, 109.19553]} icon={hotelIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {
                    data1.map((value) => (
                        <Marker position={[value.coordinates[0], value.coordinates[1]]} icon={locationIcon} key={value.id}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    ))
                }
                {/* <Description
                    title={"My button"}
                    markerPosition={[20.27, -157]}
                    description="This is a custom description!" /> */}
            </MapContainer>
        </div>
    )
}

