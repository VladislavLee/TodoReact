import React, {Component} from 'react';
import { Consumer } from "./Context";
import TextField from '@material-ui/core/TextField/index';
import Fab from '@material-ui/core/Fab/index';
import AddIcon from '@material-ui/icons/Add';
import CardUI from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent";


export default class CreateCard extends Component{
    render() {
        return(
            <Consumer>
                {({ addCard}) => (

                        <CardUI  key={this.props.cardId}  style={{marginRight: '40px',backgroundColor: '#dfe1e6',}}>
                            <CardContent>
                                <form onSubmit={addCard}>
                                    <TextField
                                        type="text"
                                        id="inputTitle"
                                        label="Title"
                                        name="addCardTitle"
                                        margin="normal"
                                        fullWidth={true}
                                    />
                                    <TextField
                                        type="text"
                                        id="inputDescription"
                                        label="Description"
                                        name="addCardDescription"
                                        margin="normal"
                                        fullWidth={true}
                                    />

                                    <Fab style={{display: "flex", justifyContent: "flex-end", marginTop: '40px' }}
                                        variant="add"
                                        size="medium"
                                        color="primary"
                                        aria-label="Add"
                                        type="submit"
                                    >
                                        <AddIcon style={{display: "flex", alignItems: "center", }}/>
                                        Create Card
                                    </Fab>

                                </form>
                            </CardContent>
                        </CardUI>

                )}
            </Consumer>



            )

    }
}

