import React from "react";
import Head from "next/head";
import Link from "next/link";
import mapPin from "../components/mapPin.svg";
import { api } from "../utils/api";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { MapContainer } from "react-leaflet-universal";
import dynamic from "next/dynamic";
import { TopFloaty } from "../components/TopFloaty";
import { Spinner } from "phosphor-react";
// const Map = ReactMapboxGl({
//   accessToken:
//     "pk.eyJ1IjoidGctdGltb3RoeWdhbm96YSIsImEiOiJjbGR3bjdoOG4wOHpwM3BxZm9za3lnMGE3In0.rKBxMre1mHLD7SS4AMftNQ",
// });

const MapSearch = dynamic(import("../components/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center gap-2">
      <Spinner className="animate-spin" size={24}/>
      <span className="font-bold text-xl">Loading Map</span>
    </div>
  ),
});

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [lng, setLng] = useState(120.733333);
  const [lat, setLat] = useState(14.833333);
  const [zoom, setZoom] = useState(9);

  const { data, isLoading } = useSWR(
    "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02&minmagnitude=1",
    fetcher
  );

  return (
    <div className="">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
          integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
          crossOrigin=""
        />
      </Head>
      <TopFloaty />
      <MapSearch center={[lat, lng]} zoom={14}>
        {" "}
      </MapSearch>
    </div>
  );
};

export default Home;
