"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const LATITUDE = 26.176056541483362;
const LONGITUDE = -80.14699119052743;

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        id="circle-example"
        mapContainerStyle={{
          height: "50vh",
          width: "60vw",
        }}
        zoom={15}
        center={{
          lat: LATITUDE,
          lng: LONGITUDE,
        }}
      >
        <Marker position={{ lat: LATITUDE, lng: LONGITUDE }} />
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
