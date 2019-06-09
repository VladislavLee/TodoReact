import React, {Component} from 'react';
import {Consumer} from "./Context";
import Fab from '@material-ui/core/Fab';

export default class RemoveAllFromTrash extends Component{

    render() {

        return (
            <Consumer>
                {({removeAllTrash}) =>  (

                    <div className="wrap-remove-from-trash" style={{display: "flex", justifyContent: "space-between", margin: '0', width: '200px' }}>
                        <Fab variant="extended" color="secondary" onClick={removeAllTrash}>
                           Remove all
                        </Fab>

                    </div>

                ) }

            </Consumer>
        )
    }
}

