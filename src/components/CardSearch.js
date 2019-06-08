import React, {Component} from 'react';
import './style.css';
import {Consumer} from "./Context";
import TextField from "@material-ui/core/TextField";


class CardSearch extends Component{
    render() {
        return (
            <Consumer>
                {({ handleSearch}) => (
                    <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) =>handleSearch(event)} value={this.props.term}
                    />
                )}
            </Consumer>
        )
    }
}

export default CardSearch;