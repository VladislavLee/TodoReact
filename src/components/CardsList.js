import React, {Component} from 'react';
import uuid from "uuid";
import './style.css';
import {Provider} from './Context';
import CreateCard from "./CreateCard/CreateCard";
import Card from "./Card/Card";
import CardSearch from "./CardSearch";
import  {cards,markers} from '../data/initialData'



const associationOfCardsAndMarkers=[];


class CardsList extends Component{


    addToAssotiationArray =(cards,markers)=>{

    };

    addCard = (event) => {
        event.preventDefault();
        const cardTitle = (event.target.elements.addCardTitle.value);
        const cardDescription = (event.target.elements.addCardDescription.value);
        const newCard = {
            cardTitle,
            cardDescription,
            cardIsDone: false ,
            cardId: uuid.v4()
        };

        this.setState ({cards: [...this.state.cards, newCard] })
    };

    removeCard =(cardId) => {
        const newCards = this.state.cards.filter(newCard =>{
            return newCard.cardId !== cardId;

        });

        this.setState({
            cards: newCards
        })
    };

    updateStatusCard=(newCard)=>{
        const newCardList = [...this.state.cards];

        newCardList.forEach((c)=>{
            if(c.cardId === newCard.cardId){
                c.cardIsDone = !newCard.cardIsDone;
            }
        });

        this.setState({
            cards: newCardList
        });
    };

    handleChangeFor = (propertyName,event,cardId) => {

        const nameInput = propertyName;


        const newCardList = [...this.state.cards];

        newCardList.forEach((c)=>{
            if(c.cardId === cardId) {
                c[nameInput] = event.target.value;
                return;
            }
        });

        this.setState({
            cards: newCardList
        });
    };


    handleSearch=(event)=>{
        this.setState({
            term: event.target.value
        })
    };

    SearchingFor=(term)=> {
        return function (x) {
            return x.cardTitle.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    };


    state = {
        cards: cards,
        markers: markers,
        associationOfCardsAndMarkers: associationOfCardsAndMarkers,
        term: '',
        addCard: this.addCard,
        removeCard: this.removeCard,
        updateStatusCard: this.updateStatusCard,
        handleChangeFor: this.handleChangeFor,
        handleSearch: this.handleSearch,
        SearchingFor: this.SearchingFor,
    };


    render() {
        return(
            <div className="wrapper">
                <Provider value={this.state}>
                    <CreateCard/>
                    <CardSearch/>
                    {
                        this.state.cards.filter(this.SearchingFor(this.state.term)).map((card)=> {
                            return  <Card card={card} key={card.cardId}  />
                        })
                    }
                </Provider>
            </div>
        )
    }
}

export default CardsList;






