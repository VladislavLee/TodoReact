import React, {Component} from 'react';
import {  Route, Switch ,BrowserRouter} from "react-router-dom";
import uuid from "uuid";
import {Provider} from './Context';
import  {cards,cardsIsDone, trash} from '../data/initialData';
import CardsList from "./CardsList";
import TrashList from "./TrashList";


class App extends Component{

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

        const cardsList = [...this.state.cards,newCard];


        this.setState ({cards:cardsList })
    };


    removeCard =(cardId) => {
        const list = [...this.state.cards];
        const updatedList = list.filter(item => item.cardId !== cardId);

        const removeItem = list.find(elem => {
            return elem.cardId === cardId;
        });

        const newTrash = [...this.state.trash, removeItem];



        this.setState({
            cards: updatedList,
            trash: newTrash
        })
    };


    removeCardTrashByItem = (cardId) => {
        const list = [...this.state.trash];
        const updatedList = list.filter(item => item.cardId !== cardId);


        this.setState({
            trash: updatedList
        })
    };


    removeAllTrash = () => {
        this.setState({
            trash: []
        })
    };


    removeAllTrashByTimer = () => {
        setTimeout(()=>{
            this.removeAllTrash()
        }, 600000)
    };


    recoveryFromTrash = (cardId) => {
        const newTrash = [...trash];

        newTrash.filter(elem => {
            return elem.cardId !== cardId;
        });

        const recoveryItem = [...trash];

        recoveryItem.find(elem => {
            return elem.cardId === cardId;
        });

        const newCards = [...cards,recoveryItem];

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


    filterCard=(filter)=>{

        const newCardList = [...this.state.cards];

        switch (filter) {
            case 'active':
                const activeCard = newCardList.filter(c => !c.cardIsDone );
                this.setState({
                    cardsIsDone: activeCard,
                    filter: 'active'
                },()=>{console.log(this.state.filter);});
                break;
            case 'completed':
                const completedCard = newCardList.filter(c => c.cardIsDone );
                this.setState({
                    cardsIsDone: completedCard,
                    filter: 'completed'
                });
                break;
            case 'all':
                this.setState({
                    cards: newCardList,
                    filter: 'all'
                });
                break;
            default:
                this.setState({
                    cards: newCardList,
                    filter: 'all'
                });
        }

    };


    componentDidUpdate() {
        window.localStorage.setItem('state', JSON.stringify(this.state));
    }

    componentDidMount() {
        try {
            const state = window.localStorage.getItem('state');
            this.setState({ ...JSON.parse(state) });
        } catch (e) {}
    }



    state = {
        cards: cards,
        trash: trash,
        cardsIsDone: cardsIsDone,
        term: '',
        addCard: this.addCard,
        removeCard: this.removeCard,
        updateStatusCard: this.updateStatusCard,
        handleChangeFor: this.handleChangeFor,
        handleSearch: this.handleSearch,
        SearchingFor: this.SearchingFor,
        removeCardTrashByItem: this.removeCardTrashByItem,
        removeAllTrash: this.removeAllTrash,
        removeAllTrashByTimer: this.removeAllTrashByTimer,
        addMarker: this.addMarker,
        filterCard: this.filterCard,
        filter: 'all',
        recoveryFromTrash: this.recoveryFromTrash,
    };



    render() {
        return(
            <div className="wrap" style={{display: 'flex', justifyContent: "space-around", }}>
                <Provider value={this.state}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={ CardsList} />
                            <Route path='/trash' component={ TrashList } />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}

export default App;






