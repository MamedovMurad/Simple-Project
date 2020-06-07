import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Cartlist extends Component {
  RenderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Mehsulun Id</th>
            <th> Kataloq Id</th>
            <th>Ad</th>
            <th> Vahid Qiymet</th>
            <th>Anbarda olan qiymet</th>
            <th>Sayi</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartitam) => (
            <tr key={cartitam.product.id}>
              <td>{cartitam.product.id}</td>
              <td>{cartitam.product.categoryId}</td>
              <td>{cartitam.product.productName}</td>
              <td>{cartitam.product.unitPrice}</td>
              <td>{cartitam.product.unitsInStock}</td>
              <td>{cartitam.quantity}</td>
              <td className="btn btn-danger" onClick={()=> this.props.removeFromCart(cartitam.product)}>Sebetden sil</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.RenderCart()}</div>;
  }
}
