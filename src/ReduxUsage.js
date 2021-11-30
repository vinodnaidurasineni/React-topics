import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from 'react-dom';
import store from './shopStore';
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            qty:Number(this.props.quantity)
        }
    }
    increaseQuantity = (event) => {
        this.setState((prevState) => { return { qty: prevState.qty + 1 } })
       
        
        var action = {
            type: 'INCREASE_QTY',
            data: {
                unitPrice: this.props.price,
                quantity: this.state.qty
            }
        };
        store.dispatch(action)
    }
    decreaseQuantity = (event) => {
        this.setState((prevState) => { return { qty: prevState.qty - 1 } })
       
        
        var action = {
            type: 'DECREASE_QTY',
            data: {
                unitPrice: this.props.price,
                quantity: this.state.qty
            }
        };
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <h6>Item id:{this.props.itemId}</h6>
                <h6>Item name: {this.props.itemName}</h6>
                <h6>Item Price: {this.props.price}</h6>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn btn-danger" onClick={this.decreaseQuantity} type="button">-</button>
                    </div>
                    <input type="text" value={this.state.qty} />
                    <div className="input-group-append">
                        <button className="btn btn-success" onClick={this.increaseQuantity} type="button">+</button>
                    </div>
                </div>
            </div>
        )
    }
}
class CheckOut extends React.Component{
    constructor() {
        super();
        this.state = {
            totalPrice:0
        }
    }
    
    render() {
        store.subscribe(()=>this.setState({totalPrice:store.getState().price}))
        return(
            <div>
                <h5>Total Price is :{this.state.totalPrice}</h5>
            </div>
        )
    }
}
export default function renderPage() {
    return (
        <div>
            <Item itemId="100" itemName="Mobile" price="100" quantity="0"/><hr/>
            <Item itemId="200" itemName="Shirt" price="20" quantity="0"/>
            <CheckOut/>
        </div>
    )
}


