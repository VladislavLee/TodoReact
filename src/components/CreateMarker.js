import React, {Component} from 'react';
import './style.css';
import { Consumer } from "./Context";
import TextField from '@material-ui/core/TextField/index';

import Fab from '@material-ui/core/Fab/index';
import AddIcon from '@material-ui/icons/Add';

export default class CreateMarker extends Component{

    render() {
        return(
            <Consumer>
                {({ addMarker}) => (
                            <form onSubmit={addMarker}>
                                <TextField
                                    type="text"
                                    id="markerTitle"
                                    label="Marker Name"
                                    name="addMarker"
                                    margin="normal"
                                />
                            </form>

                )}

            </Consumer>



        )

    }

}