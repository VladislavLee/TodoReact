import React, {Component} from 'react';
import CardSearch from "./CardSearch";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Icon from '@material-ui/core/Icon';
import CardFilter from "./CardFilter";


export default class CardsOptionMenu extends Component{
    render() {
        return (
            <div className="container-option" style={{ display: "flex", flexDirection: 'column'  }} >
                <CardSearch/>
                <Link style={{textDecoration: 'none', color: 'white'}}  to="/trash">
                    <Fab variant="extended"   color="secondary"  aria-label="Add"  style={{marginTop: "10px",width: '200px'}} >
                        To trash
                        <Icon>send</Icon>
                    </Fab>
                </Link>
                <CardFilter/>
            </div>
        )
    }
}

