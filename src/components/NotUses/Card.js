import React, {Component} from 'react';
import '../style.css';




class Card extends Component{

    removeCard =(event)=> {
        this.props.onDelete(this.props.card.cardId);
    };

    render() {
            return (
                <div className="card" key={this.props.cardId}>
                    <div className="cardTitle1"><input id={this.props.card.cardId}  name="cardTitle" onChange={(event) =>this.handleChangeTitle(event,this.props.card.cardId)}   defaultValue={this.props.card.cardTitle}/></div>

                    <div className="cardDescription1"><input id={this.props.card.cardId} name="cardDescription" onChange={(event) =>this.handleChangeDescription(event,this.props.card.cardId)} defaultValue={this.props.card.cardDescription}/></div>

                    <div className="buttonsControl">
                        <input  type="checkbox"  onClick={(event)=> this.updateStatusCard(this.state.card)} />
                        <button onClick={(event)=> this.removeCard}>Remove </button>
                    </div>
                </div>
            )
    }
}

export default Card;





