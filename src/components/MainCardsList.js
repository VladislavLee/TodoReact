import React, {Component} from 'react';
import {  Route, Switch ,BrowserRouter} from "react-router-dom";
import uuid from "uuid";
import './style.css';
import {Provider} from './Context';

import  {cards,markers, trash} from '../data/initialData'

import CardsList from "./CardsList";
import TrashList from "./TrashList";



class MainCardsList extends Component{


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

        const list = [...this.state.cards];

        list.push(newCard);

        this.setState ({cards: list })


    };

    removeCard =(cardId) => {
        const list = [...this.state.cards];

        const updatedList = list.filter(item => item.cardId !== cardId);

        const removeItem = cards.find(elem => {
            return elem.cardId === cardId;
        });

        const newTrash = [...trash, removeItem];

        this.setState({
            cards: updatedList,
            trash: newTrash
        })
    };


    removeCardTrashByItem = (cardId) => {

        const list = [...this.state.trash];

        const updatedList = list.filter(item => item.cardId !== cardId);

        const removeItem = cards.find(elem => {
            return elem.cardId === cardId;
        });

        const newTrash = [...trash, removeItem];

        this.setState({
            cards: updatedList,
            trash: newTrash
        })
    };


    removeTrash = () => {
        this.setState({
            trash: []
        })
    };

    restoreTrashByItem = (cardId) => {

        const newTrash = [...trash];

        newTrash.filter(elem => {
            return elem.cardId !== cardId;
        });

        const restoreItem = [...trash];

        restoreItem.find(elem => {
            return elem.cardId === cardId;
        });

        const newCards = [...cards, restoreItem];

        this.setState({
            cards: newCards,
            trash: newTrash
        });
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
        return (x) => {
            return x.cardTitle.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    };



    // hydrateStateWithLocalStorage() {
    //     // for all items in state
    //     for (let key in this.state) {
    //         // if the key exists in localStorage
    //         if (localStorage.hasOwnProperty(key)) {
    //             // get the key's value from localStorage
    //             let value = localStorage.getItem(key);
    //
    //             // parse the localStorage string and setState
    //             try {
    //                 value = JSON.parse(value);
    //                 this.setState({ [key]: value });
    //             } catch (e) {
    //                 // handle empty string
    //                 this.setState({ [key]: value });
    //             }
    //         }
    //     }
    // }
    //
    //
    // componentDidMount(){
    //     this.hydrateStateWithLocalStorage();
    //     // add event listener to save state to localStorage
    //     // when user leaves/refreshes the page
    //     window.addEventListener(
    //         "beforeunload",
    //         this.saveStateToLocalStorage.bind(this)
    //     );
    // }
    //
    //
    // saveStateToLocalStorage() {
    //     // for every item in React state
    //     for (let key in this.state) {
    //         // save to localStorage
    //         localStorage.setItem(key, JSON.stringify(this.state[key]));
    //     }
    // }




    state = {
        cards: cards,
        markers: markers,
        trash: trash,
        term: '',
        addCard: this.addCard,
        removeCard: this.removeCard,
        updateStatusCard: this.updateStatusCard,
        handleChangeFor: this.handleChangeFor,
        handleSearch: this.handleSearch,
        SearchingFor: this.SearchingFor,
        removeCardTrashByItem: this.removeCardTrashByItem,

    };


    render() {
        // {console.log(this.state.trash + 'DELTRETTTTTT')}
        return(
            <div className="wrapper">
                <Provider value={this.state}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={ CardsList } />
                            <Route path='/trash' component={ TrashList } />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

export default MainCardsList;






