import React, {Component} from 'react';
import './style.css';
import {Consumer} from "./Context";


class CardSearch extends Component{


    render() {
        return (
            <Consumer>
                {({ handleSearch}) => (
                    <div>
                        <input onChange={(event) =>handleSearch(event)} value={this.props.term} />
                    </div>
                )}
            </Consumer>
        )
    }
}

export default CardSearch;