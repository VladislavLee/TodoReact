import React, {Component} from 'react';
import './style.css';
import {Consumer} from "./Context";
import CardTrash from "./CardTrash";



class TrashList extends Component{

    render() {

        return (
            <Consumer>
                {({ trash, removeAllTrashByTimer}) =>  (

                    <div className="wrapper">
                        {
                          trash.map(card=> {
                                return (
                                    <CardTrash key={card.cardId} card={card} />
                                );
                            },removeAllTrashByTimer())
                        }

                    </div>

                ) }

            </Consumer>
        )
    }
}

export default TrashList;