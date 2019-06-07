import React, {Component} from 'react';
import './style.css';
import CreateCard from "./CreateCard";
import CardSearch from "./CardSearch";
import CardsListItem from "./CardsListItem";
import { Link } from "react-router-dom";


class CardsList extends Component{
    render() {
        return (
                <div className="wrapper">
                        <CreateCard/>
                        <CardSearch/>
                        <CardsListItem/>
                    <div className="trash-can">
                        <Link  to="/trash" >
                            Trash
                        </Link>

                    </div>
                </div>
        )
    }
}

export default CardsList;