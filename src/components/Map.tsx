import L, { Map, MapOptions } from "leaflet";
// React: import type { FC, ReactNode } from 'react'
import type { ComponentChildren, FunctionalComponent } from "preact";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const LeafletMap: FunctionalComponent<
  {
    center: [number, number];
    children: ComponentChildren;
    zoom: number;
  } & MapOptions
> = ({ children, ...options }) => {
  const mRef = useRef<Map | null>(null);
  return (
    <MapContainer
      ref={mRef}
      className=" z-10 h-screen w-full"
      minZoom={1}
      {...options}
      zoomControl={false}
    >
      <>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {children}
      </>
    </MapContainer>
  );
};

export default LeafletMap;
