
import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";
import alertify from"alertifyjs"
import { Switch, Route } from "react-router-dom";
import Cartlist from "./Cartlist";
import Notfound from "./Notfound";
import FormDemo from "./FormDemo";

export default class  App extends Component {
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
            <Switch>
              <Route exact path="/" render={props=>(
   <Product 
   products={this.state.products}
   add={this.add}
   currentCategory={this.state.currentCategory}  info={producinfo}/>
              )}/>
              <Route exact path="/cart" render={props=>(
           
   <Cartlist
    {...props} 
    cart={this.state.cart}
    removeFromCart={this.removeFromCart}/>
   
              )} />
              <Route path="/form1" component={FormDemo}></Route>
              <Route component={Notfound}/>
            </Switch>
        
          </Col>
        </Row>
      </Container>
      <div ></div>
    </div>
    )
 
  }
}

