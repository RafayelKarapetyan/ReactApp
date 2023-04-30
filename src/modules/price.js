// Ստեղծել Product անունով class component, որի մեջ դնել Price, Name և Description class component-ները։ 
// Product-ը դնել App.js-ում և props-ով նրան փոխանցել price, name, description պարամետրերը, 
// որոնք պետք է օգտագործվեն համապատասխանաբար Price, Name և Description կոմպոնենտների մեջ։ 
// Օրինակ՝ <Product name=”banabas” price=”1$” description=”Fresh bananas from Ecuador” />
// Բոլոր կոմպոնենտները պետք է լինեն առանձին մոդուլներում։

import { Component } from "react";

class Price extends Component{
    constructor(props){
        super(props);
        this.price = props.price;
    }
    render(){
        return(
            <p>{this.price}</p>
        )
    }
}

export default Price;