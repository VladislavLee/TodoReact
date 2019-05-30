import React, {Component} from 'react';
import uuid from "uuid";
import './style.css';


const cards = [
    {
        cardTitle: "1 task",
        cardDescription: "learn react",
        cardIsDone: false,
        cardId: uuid.v4()
    },

    {
        cardTitle: "2 task",
        cardDescription: "learn js",
        cardIsDone: false,
        cardId: uuid.v4()
    }
    ];


function SearchingFor(term) {
    return function (x) {
        return x.cardTitle.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class Card extends Component{

    constructor(props){
        super(props);

        this.state = {
            cards: cards,
            term: ''
        };


        this.addCard= this.addCard.bind(this);
        this.removeCard= this.removeCard.bind(this);
        this.updateCard= this.updateCard.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }



    addCard = (event) => {
        event.preventDefault();
        const cardTitle = (event.target.elements.addCardTitle.value);
        const cardDescription = (event.target.elements.addCardDescription.value);
        this.setState(({cards}) => ({
            cards: [...this.state.cards, {cardTitle, cardDescription, cardIsDone: false , cardId: uuid.v4()}]
        }))
    };


    removeCard(card) {
        const newCards = this.state.cards.filter(newCard =>{
            return newCard !== card;

        });

        card.cardId =

        this.setState({
            cards: [...newCards]
        })
    };


    updateCard(card){
        const newCardList = [...this.state.cards];

        newCardList.forEach((c)=>{
            if(c.cardId === card.cardId){
                c.cardIsDone = !card.cardIsDone;
                return;
            }
        });

        this.setState({
            cards: newCardList
        });
    }


    handleChangeTitle(event,index) {

        const newCardList = [...this.state.cards];

        newCardList.forEach((c)=>{

            if(c.cardId === index) {
                c.cardTitle = event.target.value;
                return;
            }
        });

        this.setState({
            cards: newCardList
        });

    }


    handleChangeDescription(event,index) {
        const newCardList = [...this.state.cards];

        newCardList.forEach((c)=>{

            if(c.cardId === index) {
                c.cardDescription = event.target.value;
                return;
            }
        });

        this.setState({
            cards: newCardList
        });
    }


    handleSearch(event){
        this.setState({
            term: event.target.value
        })
    }



    render() {

        const {term , cards} = this.state;
        return(
            <div className="wrapper">
                <form onSubmit={this.addCard}>
                    <input   id="inputTitle" type="text"  name="addCardTitle"/>
                    <textarea  id="inputDescription"  name="addCardDescription"/>
                    <button type="submit">ADD</button>


                    <input name="cardDescription" onChange={(event) =>this.handleSearch(event)} value={term} />
                </form>
                    {
                        cards.filter(SearchingFor(term)).map((card)=> {
                            return  <div className="card" key={card.cardId}>
                                        <div className="cardTitle1"><input id={card.cardId}  name="cardTitle" onChange={(event) =>this.handleChangeTitle(event,card.cardId)}   defaultValue={card.cardTitle}/></div>

                                        <div className="task">
                                            <div className="cardDescription1"><input id={card.cardId} name="cardDescription" onChange={(event) =>this.handleChangeDescription(event,card.cardId)} defaultValue={card.cardDescription}/></div>
                                        </div>
                                        <div className="buttonsControl">
                                            <input  type="checkbox"  onClick={(event)=> this.updateCard(card)} />
                                            <button onClick={(event)=> this.removeCard(card)}>Remove </button>
                                        </div>
                                     </div>
                        })
                    }

            </div>
        )
    }
}

export default Card;







