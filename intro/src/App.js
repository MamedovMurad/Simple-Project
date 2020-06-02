
import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";
import alertify from"alertifyjs"

export default class App extends Component {
  constructor(){
    super();
    this.state={currentCategory: "",products:[],cart:[]}
  }
 
  cahangeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category)
    this.getProducts(category.id)
  };
  componentDidMount(){
    this.getProducts();
  }
  getProducts=(categoryId)=>{
    let Url="http://localhost:3000/products";
    if(categoryId){
      Url+="?categoryId="+categoryId
    }
    fetch(Url)
    .then(Response=>Response.json())
    .then(data=>this.setState({products:data}));
  };
  add=(product)=>{
   
    let newcart= this.state.cart;
    var addedItem =newcart.find(n => n.product.id ===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }else{
     newcart.push({product:product,quantity:1});
    }
    
    this.setState({cart:newcart})
    alertify.success(product.productName+" added to basket",0.7)
 
  };
  removeFromCart=(product)=>{
let newcart=this.state.cart.filter(c=>c.product.id!==product.id)
this.setState({cart:newcart})
alertify.error(product.productName+" delete from basket",3)
  }
  
  render(){
    let producinfo={title:"product",}
   let  categoryinfo={title:"category",}
    return(   <div>
      <Container>
       
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}></Navi>
        
        <Row>
          <Col xs="3">
            <CategoryList currentCategory={this.state.currentCategory} cahangeCategory={this.cahangeCategory} info={categoryinfo}></CategoryList>
          </Col>
          <Col xs="9">
            <Product 
            products={this.state.products}
            add={this.add}
            currentCategory={this.state.currentCategory}  info={producinfo}/>
          </Col>
        </Row>
      </Container>
    </div>
    )
 
  };
}

