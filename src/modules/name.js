import { Component } from "react";

class Name extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
    }
    render(){
        return(
            <p>{this.name}</p>
        )
    }
}

export default Name;