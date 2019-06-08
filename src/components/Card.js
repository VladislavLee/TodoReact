import React, {Component} from 'react';
import './style.css';
import { Consumer } from "./Context";
import CardUI from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";


class Card extends Component{

    render() {

            const TodoComponent = {
                marginRight: "40px",
                backgroundColor: '#dfe1e6',
            };

            const TodoComponent2 = {
                marginRight: "40px",
                backgroundColor: '#7cfe00',
            };

            return (
                <Consumer>
                    {({ updateStatusCard, removeCard, handleChangeFor}) => (
                            <CardUI style={ !this.props.card.cardIsDone ? TodoComponent : TodoComponent2} key={this.props.cardId}>
                                <CardContent>

                                    {/*<Typography variant="h4"*/}
                                    {/*            gutterBottom*/}
                                    {/*            name="cardTitle"*/}
                                    {/*            id={this.props.card.cardId}*/}
                                    {/*            disableUnderline={true}*/}
                                    {/*            fullWidth={true}*/}
                                    {/*            onChange={(event) =>handleChangeFor('cardTitle',event,this.props.card.cardId)}>*/}
                                    {/*    {this.props.card.cardTitle}*/}
                                    {/*</Typography>*/}



                                    <InputBase
                                        style={{textDecoration: 'none', fontSize: '23px', padding: "10px",}}
                                        id={this.props.card.cardId} disableUnderline={true}
                                        name="cardTitle"
                                        onChange={(event) =>handleChangeFor('cardTitle',event,this.props.card.cardId)}
                                        defaultValue={this.props.card.cardTitle}
                                        margin="normal"
                                        inputProps={{ 'aria-label': 'naked' }}
                                        fullWidth={true}
                                    />


                                    <InputBase
                                        style={{textDecoration: 'none', fontSize: '16px', padding: "10px", height:'90px' }}
                                        id={this.props.card.cardId}
                                        multiline
                                        rowsMax="4"
                                        name="cardDescription"
                                        onChange={(event) =>handleChangeFor('cardDescription',event,this.props.card.cardId)}
                                        defaultValue={this.props.card.cardDescription}
                                        margin="normal"
                                        fullWidth={true}
                                        inputProps={{ 'aria-label': 'naked' }}
                                    />
                                    {/*<TextField*/}
                                    {/*    id={this.props.card.cardId}*/}
                                    {/*    name="cardDescription"*/}
                                    {/*    onChange={(event) =>handleChangeFor('cardDescription',event,this.props.card.cardId)}*/}
                                    {/*    defaultValue={this.props.card.cardDescription}*/}
                                    {/*    margin="normal"*/}
                                    {/*    fullWidth={true}*/}
                                    {/*    variant="outlined"*/}
                                    {/*/>*/}
                                </CardContent>
                                <CardActions style={{display: "flex", alignItems: "flex-end", flex: '1 0 auto', flexDirection: "row", justifyContent: "space-between",padding: "10px", }}>
                                    <Checkbox
                                        onClick={(event)=>updateStatusCard(this.props.card)}
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                        color="primary"
                                    />

                                    <Button variant="contained" color="secondary" onClick={(event)=> removeCard(this.props.card.cardId)} >
                                        Delete
                                        <DeleteIcon/>
                                    </Button>
                                </CardActions>
                            </CardUI>
                    )}
                </Consumer>
            )
    }
}

export default Card;





