import React, {Component} from 'react';
import './style.css';
import CardSearch from "./CardSearch";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Icon from '@material-ui/core/Icon';


export default class CardsOptionMenu extends Component{
    render() {
        return (
            <div className="container-option" style={{marginTop: "22px", display: "flex", flexDirection: 'column'}} >
                <CardSearch/>
                    <Fab variant="extended" color="secondary"  aria-label="Add"  style={{marginTop: "22px"}} >

                        <Link style={{textDecoration: 'none', color: 'white'}}  to="/trash">

                        To trash   </Link>
                        <Icon>send</Icon>
                    </Fab>
            </div>
        )
    }
}

