import React, {Component} from 'react';
import {Consumer} from "./Context";
import CardTrash from "./CardTrash";
import RemoveAllFromTrash from "./RemoveAllFromTrash";


class TrashList extends Component{

    render() {

        return (
            <Consumer>
                {({trash, removeAllTrashByTimer}) =>  (


                    <div className="wrapper" style={{display: "flex", justifyContent: "space-between", margin: '0', width: '1200px', marginTop: '100px' }}>
                        {
                            trash.map(card=> {
                            return <CardTrash key={card.cardId} card={card} />
                            },removeAllTrashByTimer())
                        }

                        <RemoveAllFromTrash/>
                    </div>

                ) }

            </Consumer>
        )
    }
}

export default TrashList;