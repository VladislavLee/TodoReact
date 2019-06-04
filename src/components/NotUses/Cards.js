// import React, {Component} from 'react';
// import uuid from "uuid";
// import './style.css';
// import CreateCard from "./CreateCard";
// import Card from "./Card";
//
//
// const cardsList= [
//     {
//         cardTitle: "1 task",
//         cardDescription: "learn react",
//         cardIsDone: false,
//         cardId: uuid.v4()
//     },
//
//     {
//         cardTitle: "2 task",
//         cardDescription: "learn js",
//         cardIsDone: false,
//         cardId: uuid.v4()
//     }
// ];
//
//
//
//
// function SearchingFor(term) {
//     return function (x) {
//         return x.cardTitle.toLowerCase().includes(term.toLowerCase()) || !term;
//     }
// }
//
// class Cards extends Component{
//
//     state = {
//         cards : cardsList,
//         term: ''
//     };
//
//
//     addCard = (newCard) => {
//         this.setState ({cards: [...this.state.cards, newCard] })
//     };
//
//
//     removeCard =(cardId)=> {
//         const newCards = this.state.cards.filter(newCard =>{
//             return newCard !== cardId;
//         });
//
//         this.setState({
//             cards: newCards
//         })
//     };
//
//
//     updateCard=(card)=>{
//         const newCardList = [...this.state.cards];
//
//         newCardList.forEach((c)=>{
//             if(c.cardId === card.cardId){
//                 c.cardIsDone = !card.cardIsDone;
//                 return;
//             }
//         });
//
//         this.setState({
//             cards: newCardList
//         });
//     };
//
//
//     handleChangeTitle=(event,index)=> {
//         const newCardList = [...this.state.cards];
//
//         newCardList.forEach((c)=>{
//
//             if(c.cardId === index) {
//                 c.cardTitle = event.target.value;
//                 return;
//             }
//         });
//
//         this.setState({
//             cards: newCardList
//         });
//     };
//
//
//     handleChangeDescription=(event,index)=> {
//         const newCardList = [...this.state.cards];
//
//         newCardList.forEach((c)=>{
//             if(c.cardId === index) {
//                 c.cardDescription = event.target.value;
//                 return;
//             }
//         });
//
//         this.setState({
//             cards: newCardList
//         });
//     };
//
//
//     handleSearch=(event)=>{
//         this.setState({
//             term: event.target.value
//         })
//     };
//
//
//
//     render() {
//
//         const {term , cards} = this.state;
//
//         return(
//             <div className="wrapper">
//                 <input name="cardDescription" onChange={(event) =>this.handleSearch(event)} value={term} />
//                 <CreateCard onAddCard={this.addCard} />
//                 {
//                     cards.filter(SearchingFor(term)).map((card)=> {
//                         return  <Card card={card} key={card.cardId} onDelete={this.removeCard}/>
//                     })
//                 }
//             </div>
//         )
//     }
// }
//
// export default Cards;


// import React, {Component} from 'react';
// import uuid from "uuid";
// import './style.css';
// import Card from "./Card";
//
//
// const cards = [
//     {
//         cardTitle: "1 task",
//         cardDescription: "learn react",
//         cardIsDone: false,
//         cardId: uuid.v4()
//     },
//
//     {
//         cardTitle: "2 task",
//         cardDescription: "learn js",
//         cardIsDone: false,
//         cardId: uuid.v4()
//     }
// ];
//
//
// function SearchingFor(term) {
//     return function (x) {
//         return x.cardTitle.toLowerCase().includes(term.toLowerCase()) || !term;
//     }
// }
//
// class Cards extends Component{
//
//     constructor(props){
//         super(props);
//
//         this.state = {
//             cards: cards,
//             term: ''
//         };
//
//     }
//
//
//
//
//     removeCard =(cardId)=> {
//         const newCards = this.state.cards.filter(newCard =>{
//             return newCard !== cardId;
//
//         });
//
//         this.setState({
//             cards: [...newCards]
//         })
//     };
//
//
//
//     handleChangeTitle =(event,index)=> {
//
//         const newCardList = [...this.state.cards];
//
//         newCardList.forEach((c)=>{
//
//             if(c.cardId === index) {
//                 c.cardTitle = event.target.value;
//                 return;
//             }
//         });
//
//         this.setState({
//             cards: newCardList
//         });
//     };
//
//
//     handleChangeDescription =(event,index)=> {
//         const newCardList = [...this.state.cards];
//
//         newCardList.forEach((c)=>{
//
//             if(c.cardId === index) {
//                 c.cardDescription = event.target.value;
//                 return;
//             }
//         });
//
//         this.setState({
//             cards: newCardList
//         });
//     };
//
//
//     handleSearch =(event)=>{
//         this.setState({
//             term: event.target.value
//         })
//     };
//
//
//
//     createCard= (event) => {
//
//         const cardTitle = (event.target.elements.addCardTitle.value);
//         const cardDescription = (event.target.elements.addCardDescription.value);
//         const newCard = {
//             cardTitle:cardTitle,
//             cardDescription: cardDescription,
//             cardIsDone: false ,
//             cardId: uuid.v4()
//         };
//
//         this.setState({
//             cards: [...this.state.cards , newCard]
//         })
//
//         console.log(this.state.cards);
//     };
//
//
//     render() {
//         const {term , cards} = this.state;
//         return(
//             <div className="wrapper">
//                 <form onSubmit={this.createCard}>
//                     <input   id="inputTitle" type="text"  name="addCardTitle"/>
//                     <textarea  id="inputDescription"  name="addCardDescription"/>
//                     <button type="submit">ADD</button>
//                 </form>
//                 {
//                     cards.filter(SearchingFor(term)).map((card)=> {
//                         return  (
//                                 <Card card={card} key={card.cardId} onDelete={this.removeCard.bind(this)}/>
//                             )
//
//                     })
//                 }
//
//             </div>
//         )
//     }
// }
//
// export default Cards;











