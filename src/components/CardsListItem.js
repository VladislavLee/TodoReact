import React, {Component} from 'react';
import {Consumer} from "./Context";
import Card from "./Card";


class CardsListItem extends Component{

    render() {
        function renderCards(cardsIsDone, cards, filter,SearchingFor,term ){
            console.log(SearchingFor)
            if(filter === 'completed' || filter ==='active' ){
               const content = cardsIsDone.filter(SearchingFor(term)).map((card) => {
                    return <Card
                        card={card}
                        key={card.cardId}
                    />
               });

                return content;

            } else if(filter === 'all') {
                const content = cards.filter(SearchingFor(term)).map((card) => {
                    return <Card
                        card={card}
                        key={card.cardId}
                    />
                });

                return content;
            }
        }


        return (
            <div className="container" style={{marginTop: "5px", display: "flex",}} >
                <Consumer>
                        {
                            ({ cards, SearchingFor, term, cardsIsDone, filter} ) => (
                                    renderCards(cardsIsDone,cards,filter,SearchingFor,term)
                                )
                        }
                </Consumer>
            </div>
        )
    }
}

export default CardsListItem;