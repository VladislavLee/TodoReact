import React, { Component } from "react";
import { Consumer } from "./Context";
import CardUI from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

export default class CardTrash extends Component {
    render() {
        return (
            <Consumer>
                {({ updateStatusCard,removeCardTrashByItem,handleChangeFor,trash }) => (
                    <div className="card" key={this.props.card.cardId}>
                        <CardUI >
                            <CardContent>
                                <TextField
                                    id={this.props.card.cardId}   name="cardTitle" onChange={(event) =>handleChangeFor('cardTitle', event,this.props.card.cardId)}  defaultValue={this.props.card.cardTitle}
                                />
                                <TextField
                                    id={this.props.card.cardId} name="cardDescription" onChange={(event) =>handleChangeFor('cardDescription', event, this.props.card.cardId)} defaultValue={ this.props.card.cardDescription}
                                />
                            </CardContent>
                            <CardActions>
                                <Checkbox
                                    onClick={(event)=>updateStatusCard(trash.card)}
                                    inputProps={{
                                        'aria-label': 'primary checkbox',
                                    }}
                                />
                                <Button size="small" onClick={(event)=> removeCardTrashByItem(this.props.card.cardId)}>Remove</Button>
                            </CardActions>
                        </CardUI>

                    </div>
                )}
            </Consumer>
        );
    }
}