import React, {Component} from 'react';
import { Consumer } from "../Context";
import TextField from '@material-ui/core/TextField/index';

import Fab from '@material-ui/core/Fab/index';
import AddIcon from '@material-ui/icons/Add';
import CardUI from "@material-ui/core/Card/Card";



export default class CreateCard extends Component{


    render() {
        return(
            <Consumer>
                {({ addCard}) => (
                    <div className="card" key={this.props.cardId}>
                        <CardUI>
                                <form onSubmit={addCard}>
                                    <TextField
                                        type="text"
                                        id="inputTitle"
                                        label="Title Card"
                                        name="addCardTitle"
                                        margin="normal"
                                    />
                                    <TextField
                                        type="text"
                                        id="inputDescription"
                                        label="Description Card"
                                        name="addCardDescription"
                                        margin="normal"
                                    />

                                    <Fab color="primary" type="submit" aria-label="Add" >
                                        <AddIcon />
                                    </Fab>
                                </form>
                        </CardUI>
                    </div>
                )}

            </Consumer>



            )

    }
}

