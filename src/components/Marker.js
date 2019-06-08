import React, {Component} from 'react';
import './style.css';
import {Consumer} from "./Context";
import TextField from "@material-ui/core/TextField";
import CreateMarker from "./CreateMarker";


export default class Marker extends Component{
    render() {
        return (
            <Consumer>
                {({ addMarker }) => (
                    <div>

                        <CreateMarker/>
                        <TextField
                            id={this.props.marker.cardId}   name="markerTitle" onChange={(event) =>('markerTitle', event, this.props.marker.cardId)}  defaultValue={this.props.marker.markerName}
                        />
                    </div>
                )}
            </Consumer>
        )
    }
}