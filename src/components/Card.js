import React, {Component} from 'react';
import './style.css';
import { Consumer } from "./Context";
import CardUI from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';




class Card extends Component{

    render() {

            return (
                <Consumer>
                    {({ updateStatusCard, removeCard, handleChangeFor}) => (
                        <div className="card" key={this.props.cardId}>

                            <CardUI >
                                <CardContent>

                                        <TextField
                                            id={this.props.card.cardId}   name="cardTitle" onChange={(event) =>handleChangeFor('cardTitle',event,this.props.card.cardId)}  defaultValue={this.props.card.cardTitle}
                                        />


                                        <TextField
                                            id={this.props.card.cardId} name="cardDescription" onChange={(event) =>handleChangeFor('cardDescription',event,this.props.card.cardId)} defaultValue={this.props.card.cardDescription}
                                        />

                                </CardContent>
                                <CardActions>
                                    <Checkbox
                                        onClick={(event)=>updateStatusCard(this.props.card)}
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    <Button size="small" onClick={(event)=> removeCard(this.props.card.cardId)}>Remove</Button>

                                </CardActions>
                            </CardUI>

                        </div>
                    )}
                </Consumer>
            )
    }
}

export default Card;





