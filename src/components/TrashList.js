import React, {Component} from 'react';
import './style.css';
import {Consumer} from "./Context";
import CardTrash from "./CardTrash";



class TrashList extends Component{

    render() {

        return (
            <Consumer>
                {({ trash }) => (
                    <div className="wrapper">
                        {
                          trash.map(card=> {
                                return (
                                    <CardTrash key={card.cardId} card={card} />
                                );
                            })
                        }
                    </div>

                )}
            </Consumer>
        )
    }
}

export default TrashList;