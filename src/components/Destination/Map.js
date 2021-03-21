import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Destination.css";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "350px",
};

const center = {
  lat: 22.359316,
  lng: 91.821831,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBWbBoN_xHW6Sxd55srbgVA7JaGkMJ4csk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker  position={center}></Marker>
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
