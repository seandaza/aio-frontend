import React, { Component } from 'react';
import GoogleMaps from "simple-react-google-maps";
import credentials from './credentials';

const apiKey = `${credentials.apiKey}`;

export default class Map extends Component {
    render () {
        return (
            <div className= "container">
                <GoogleMaps
                apiKey={apiKey}    
                style={{width: "100%", height: "400px"}}
                zoom={14}
                center={{
                    lat: 10.443810436690312,
                    lng: -75.52566317023651
                }}
                markers = {{lat: 10.443810436690312, lng: -75.52566317023651}}
                />
            </div>
        )
    }
}
