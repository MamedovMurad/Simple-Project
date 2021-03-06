import React, { Component } from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Basket - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
                <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>x</Badge>
              {cartItem.product.productName}
              <Badge color="primary">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">go to cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
  renderEmpty(){
      return(  <NavItem>
        <NavLink>Sebet bos</NavLink>
    </NavItem>)
  }
  render() {
    return <div>
        {this.props.cart.length>0?this.renderSummary():this.renderEmpty()}
    </div>;
  }
}
