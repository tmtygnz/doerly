import React from "react";
import Head from "next/head";
import Link from "next/link";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup } from "react-map-gl";

import { api } from "../utils/api";
import { useEffect, useRef, useState } from "react";
import { TopFloaty } from "../components/TopFloaty";
import { FpsView } from "react-fps";
import { FileSearch } from "phosphor-react";
// const Map = ReactMapboxGl({
//   accessToken:
//     "pk.eyJ1IjoidGctdGltb3RoeWdhbm96YSIsImEiOiJjbGR3bjdoOG4wOHpwM3BxZm9za3lnMGE3In0.rKBxMre1mHLD7SS4AMftNQ",
// });
const Home = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [lng, setLng] = useState(120.733333);
  const [lat, setLat] = useState(14.833333);
  const [zoom, setZoom] = useState(9);

  return (
    <div className="flex">
      <TopFloaty />
      <Map
        mapboxAccessToken="pk.eyJ1IjoidGctdGltb3RoeWdhbm96YSIsImEiOiJjbGR3bjdoOG4wOHpwM3BxZm9za3lnMGE3In0.rKBxMre1mHLD7SS4AMftNQ"
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      >
        <Marker longitude={lng} latitude={lat} anchor="bottom">
          <div className="rounded-xl border p-5"></div>
        </Marker>
      </Map>
    </div>
  );
};

export default Home;
