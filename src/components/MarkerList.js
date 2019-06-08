import React, {Component} from 'react';
import './style.css';
import {Consumer} from "./Context";
import Marker from "./Marker";


export default class MarkerList extends Component{

    render() {

        return (
            <Consumer>
                {({ markers }) => (
                    markers.map((marker)=> {
                        return  <Marker marker={marker} key={marker.markerId}/>
                    })
                )}
            </Consumer>
        )
    }
}

