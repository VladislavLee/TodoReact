import React, {Component} from 'react';
import './style.css';
import {Consumer} from "./Context";
import CardUI from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

export default class Marker extends Component{
    render() {

        return (
            <Consumer>
                {({ addMarker }) => (
                    <div>
                        <TextField
                            id={this.props.card.cardId}   name="cardTitle" onChange={(event) =>('cardTitle',event,this.props.card.cardId)}  defaultValue={this.props.card.cardTitle}
                        />
                        <Button size="small" onClick={(event)=> addMarker(this.props.card.cardId)}>Remove</Button>
                    </div>

                )}
            </Consumer>
        )
    }
}