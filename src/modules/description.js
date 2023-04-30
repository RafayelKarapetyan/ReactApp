import { Component } from "react";

class Description extends Component{
    constructor(props){
        super(props);
        this.description = props.description;
    }
    render(){
        return(
            <p>{this.description}</p>
        )
    }
}

export default Description;