import React, {Component} from 'react';
import uuid from 'uuid';

export default class CreateCard extends Component{

    addCard = (event) => {
        const cardTitle = (event.target.elements.addCardTitle.value);
        const cardDescription = (event.target.elements.addCardDescription.value);
        const newCard = {
            cardTitle,
            cardDescription,
            cardIsDone: false ,
            cardId: uuid.v4()
        };

        this.props.onCreateCard(newCard);
    };

        render() {
            return(
                    <form onSubmit={this.addCard}>
                        <input   id="inputTitle" type="text"  name="addCardTitle"/>
                        <textarea  id="inputDescription"  name="addCardDescription"/>
                        <button type="submit">ADD</button>
                    </form>
                )

        }
}

