import { Component } from "react";

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            value: 0
        }
    }
    handleClickPlus = () =>{
        this.setState({
            value: this.state.value + 1
        })
    }
    handleClickMinus = () =>{
        if(this.state.value > 0){
            this.setState({
                value: this.state.value - 1
            })
        }
    }
    render() {
        return(
            <div>
                <p>This default value {this.state.value}</p>
                <button onClick={this.handleClickPlus}>value +</button>
                <button onClick={this.handleClickMinus}>value -</button>
            </div>
        );
    }
}
