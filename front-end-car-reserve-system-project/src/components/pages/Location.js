import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 15, lng: 100 }} />;
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Location() {
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDckjrDSaeEdusB8nAmubq2RlQAQ-yB82s`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

// not finished yet , struck in payment
// maybe developes later
