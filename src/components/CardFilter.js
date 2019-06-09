import React, {Component} from 'react';
import {Consumer} from "./Context";
import AppBar from '@material-ui/core/AppBar';
import Button from "@material-ui/core/Button";


export default class CardFilter extends Component{
    render() {
        return (
            <Consumer>
                {({ filterCard}) => (

                    <AppBar position="static" color="default" style={{marginTop: '15px' }}>

                            <Button color="primary" onClick={() =>filterCard('all')}>
                               show all
                            </Button>
                            <Button color="primary" onClick={() =>filterCard('active')}>
                                active
                            </Button>
                            <Button color="primary" onClick={() => filterCard('completed')}>
                                completed
                            </Button>



                    </AppBar>



                )}
            </Consumer>
        )
    }
}

