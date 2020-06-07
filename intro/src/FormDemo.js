import React, { Component } from 'react'
import { Form } from 'reactstrap'

export default class FormDemo extends Component {
    state={UserName:"", city:""}
    change=(event)=>{
     
       let name = event.target.name;
       let value=event.target.value;
    this.setState({[name]:value})
    }
    submit=(submit)=>{
        submit.preventDefault();
       alert(this.state.UserName + " " +this.state.city);
       
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.submit}>
                   <label>User Name: </label>
                   <input type="text" name="UserName" onChange={this.change}></input>
        <h4>Name is: {this.state.UserName}</h4>
       
        <label>City: </label>
                   <input type="text" name="city" onChange={this.change}></input>
        <h4>City: {this.state.city}</h4>
        

        
        <input type="submit" value="qeyde al" />
                </Form>
            </div>
        )
    }
}
