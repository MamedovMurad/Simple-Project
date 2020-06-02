import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
    

  };
  componentDidMount(){
    this.getCategories();
  }
  getCategories=()=>{
fetch("http://localhost:3000/categories")
.then(Response=>Response.json())
.then(data=>this.setState({categories:data}));

  }
 
  render() {
    return (
      <div>
        <h3>{this.props.info.title}-{this.state.categories.length}</h3>

        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem active={ category.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.cahangeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
<ListGroupItem>hh-

</ListGroupItem>
          {/* <h4>{this.props.currentCategory}</h4> */}
        </ListGroup>
      </div>
    );
  }
}
