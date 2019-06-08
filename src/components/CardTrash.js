import React, { Component } from "react";
import { Consumer } from "./Context";
import CardUI from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from '@material-ui/core/Typography';
export default class CardTrash extends Component {
    render() {
        return (
            <Consumer>
                {({ updateStatusCard,removeCardTrashByItem,handleChangeFor,trash }) => (
                    <CardUI  key={this.props.cardId} style={{backgroundColor: '#dfe1e6',}}>
                        <CardContent>
                            {/*<TextField*/}
                            {/*    id={this.props.card.cardId} disableUnderline={true}*/}
                            {/*    name="cardTitle"*/}
                            {/*    onChange={(event) =>handleChangeFor('cardTitle',event,this.props.card.cardId)}*/}
                            {/*    defaultValue={this.props.card.cardTitle}*/}
                            {/*    margin="normal"*/}
                            {/*    variant="outlined"*/}
                            {/*    fullWidth={true}*/}
                            {/*/>*/}
                            <Typography variant="h4" gutterBottom>
                                {this.props.card.cardTitle}
                            </Typography>

                            <TextField
                                id={this.props.card.cardId}
                                name="cardDescription"
                                onChange={(event) =>handleChangeFor('cardDescription',event,this.props.card.cardId)}
                                defaultValue={this.props.card.cardDescription}
                                margin="normal"
                                fullWidth={true}
                                variant="outlined"
                            />
                        </CardContent>
                        <CardActions>
                            <Checkbox
                                onClick={(event)=>updateStatusCard(this.props.card)}
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                }}
                                color="primary"
                            />

                            <Button variant="contained" color="secondary" onClick={(event)=>removeCardTrashByItem(this.props.card.cardId)} >
                                Delete
                                <DeleteIcon/>
                            </Button>
                        </CardActions>
                    </CardUI>
                )}
            </Consumer>
        );
    }
}