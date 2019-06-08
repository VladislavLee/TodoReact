import React, {Component} from 'react';
import './style.css';
import {Consumer} from "./Context";
import Card from "./Card";


class CardsListItem extends Component{

    render() {
        return (
            <div className="container" style={{marginTop: "5px", display: "flex"}} >
                <Consumer>
                        {({ cards, SearchingFor, term}) => (
                        cards.filter(SearchingFor(term)).map((card)=> {
                                return <Card card={card} key={card.cardId}  />

                            })
                        )}
                </Consumer>
            </div>
        )
    }
}

export default CardsListItem;