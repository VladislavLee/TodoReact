import React, { Component } from "react";
import { Consumer } from "./Context";
import CardUI from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";
import InputBase from "@material-ui/core/InputBase";


export default class CardTrash extends Component {
    render() {
        return (
            <Consumer>
                {({ removeCardTrashByItem }) => (
                    <CardUI  key={this.props.cardId} style={{backgroundColor: '#dfe1e6', marginLeft: "20px", marginRight: '20px',}}>
                        <CardContent>
                            <InputBase
                                style={{textDecoration: 'none', fontSize: '23px', padding: "10px",}}
                                id={this.props.card.cardId} disableUnderline={true}
                                name="cardTitle"
                                defaultValue={this.props.card.cardTitle}
                                margin="normal"
                                inputProps={{ 'aria-label': 'naked' }}
                                fullWidth={true}
                                disabled={true}
                            />


                            <InputBase
                                style={{textDecoration: 'none', fontSize: '16px', padding: "10px", height:'90px' }}
                                id={this.props.card.cardId}
                                multiline
                                rowsMax="4"
                                name="cardDescription"
                                defaultValue={this.props.card.cardDescription}
                                margin="normal"
                                fullWidth={true}
                                inputProps={{ 'aria-label': 'naked' }}
                                disabled={true}
                            />
                        </CardContent>
                        <CardActions>
                            <Checkbox
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                }}
                                color="primary"
                                disabled={true}
                                checked={this.props.card.cardIsDone}
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