import React, {Component} from 'react';
import './style.css';
import {Consumer} from "./Context";
import CardTrash from "./CardTrash";



class TrashList extends Component{

    render() {

        return (
            <Consumer>
                {({ trash }) => (
                    <div className="wrapper">{console.log(trash)}
                        {
                          trash.map(info => {
                                return (
                                    <CardTrash key={info.cardId} />
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