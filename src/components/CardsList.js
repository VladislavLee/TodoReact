import React, {Component} from 'react';
import './style.css';
import CreateCard from "./CreateCard";
import CardsListItem from "./CardsListItem";
import CardsOptionMenu from "./CardsOptionMenu"


class CardsList extends Component{
    render() {
        return (
                <div className="wrapper" style={{display: "flex", justifyContent: "space-between", marginTop: '40px' }}>
                        <CreateCard/>
                        <CardsListItem/>
                        <CardsOptionMenu/>
                </div>
        )
    }
}

export default CardsList;