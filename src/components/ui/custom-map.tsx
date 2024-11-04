'use client'

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

const containerStyle = {
    width: '100%',
    height: '200px',
};

const mapStyles = [
    {
        featureType: "poi",
        stylers: [{ visibility: "off" }]
    },
    {
        featureType: "transit",
        stylers: [{ visibility: "off" }]
    }
];


export function CustomMap({lat, lng}) {
    const center = {
        lat: +lat, lng: +lng
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD3uua5UjFuo8kjaalxT8WwJoUPnnK3rGw"
    })

    const [map, setMap] = useState(null)
    const [event, setEvent] = useState(null)

    const onLoad = useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    if(!isLoaded) {
        return null;
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: false,
                fullscreenControl: false,
                gestureHandling: 'greedy',
                styles: mapStyles
            }}
        >
            <MarkerF
                key={2}
                position={{ lat: +lat, lng: +lng }}
            />
        </GoogleMap>
    )
}