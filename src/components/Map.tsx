import React, {useContext, useEffect, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import '../utils/fix-map-icon'
import {SearchContext} from "../contexts/search.context";
import {SimpleAdEntity} from 'types';
import {apiUrl} from "../config/api";

import 'leaflet/dist/leaflet.css';
import {SingleAd} from "./SingleAd";
import styled from "styled-components";

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async () => {

            const res = await fetch(`${apiUrl}/ad/search/${search}`);
            const data = await res.json();

            setAds(data);

        })();
    }, [search]);

    return (
        <MapWrapper>
            <MapContainer center={[49.9511539, 18.592575]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                {
                    ads.map(ad => (
                        <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                            <Popup>
                                <SingleAd id={ad.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </MapWrapper>
    );
};

const MapWrapper = styled.div`
  height: calc(100vh - 3.1rem);
  width: 100%;
  background-color: ${(props) => props.theme.colors.blue};

  .leaflet-container {
    height: 100%
  }
`;