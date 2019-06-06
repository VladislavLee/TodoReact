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

                    <div className="card" key={trash.cardId}>
                        {console.log(trash)}
                        <CardUI >
                            <CardContent>
                                <TextField
                                    id={trash.cardId}   name="cardTitle" onChange={(event) =>handleChangeFor('cardTitle',event,trash.cardId)}  defaultValue={trash.cardTitle}
                                />

                                <TextField
                                    id={trash.cardId} name="cardDescription" onChange={(event) =>handleChangeFor('cardDescription',event,trash.cardId)} defaultValue={trash.cardDescription}
                                />

                            </CardContent>
                            <CardActions>
                                <Checkbox
                                    onClick={(event)=>updateStatusCard(trash.card)}
                                    inputProps={{
                                        'aria-label': 'primary checkbox',
                                    }}
                                />
                                <Button size="small" onClick={(event)=> removeCardTrashByItem(trash.cardId)}>Remove</Button>
                            </CardActions>
                        </CardUI>

                    </div>
                )}
            </Consumer>
        );
    }
}