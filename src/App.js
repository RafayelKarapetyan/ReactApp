import './App.css';
import Counter from "./modules/counter";

import Name from "./modules/name";
import Price from "./modules/price";
import Description from "./modules/description";

import { Component } from "react"

class Product extends Component {
  constructor(props) {
    super(props);
    this.name = "bananas";
    this.price = "1$";
    this.description = "Fresh bananas from Ecuador";
  }

  render() {
    return (
      <div>
        <h3>Products, their prices and descriptions</h3>
        <table border="1" cellpadding="20px">
          <tr>
            <th> Name</th>
            <th> Price</th>
            <th> Description</th>
          </tr>
          <tr>
            <td><Name name={this.name} /></td>
            <td><Price price={this.price} /></td>
            <td><Description description={this.description} /></td>
          </tr>
        </table>
      </div>
    )
  }
}
export default function MyApp() {
  return (
    <div>
      <Counter />
      <Product />
    </div>
  )
}