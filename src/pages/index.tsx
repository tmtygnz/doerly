import React from "react";
import Head from "next/head";
import Link from "next/link";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import { api } from "../utils/api";
import { useEffect, useRef, useState } from "react";
import { TopFloaty } from "../components/TopFloaty";
import { FpsView } from "react-fps";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGctdGltb3RoeWdhbm96YSIsImEiOiJjbGR3bjdoOG4wOHpwM3BxZm9za3lnMGE3In0.rKBxMre1mHLD7SS4AMftNQ";

const Home = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<HTMLDivElement | null>(null);
  const [lng, setLng] = useState(120.733333);
  const [lat, setLat] = useState(14.833333);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    const toAdd = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/outdoors-v12?optimize=true",
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
      minZoom: 5,
      logoPosition: "bottom-right",
    });
    toAdd.addControl(
      new mapboxgl.AttributionControl({ compact: true }),
      "bottom-right"
    );

    map!.current! = toAdd;
  }, []);

  return (
    <div className="flex">
      <TopFloaty />
      <div className="h-screen w-full" ref={mapContainer}></div>
    </div>
  );
};

export default Home;
