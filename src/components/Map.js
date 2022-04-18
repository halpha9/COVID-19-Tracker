import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../util";
import "./Map.css";



function Map({ casesType, countries, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          atribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;