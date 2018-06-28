import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor(props){
          super(props);
          this.state = {

              name : '',
              email : '',
              message : ''


          }
          this.submitForm = this.submitForm.bind(this);
  }
  handleChange(e){

    this.setState({
        [e.target.name] : [e.target.value]


    })
  }
async submitForm(e){
        
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        console.log(name);
        console.log(email);
        console.log(message);


        const form = await axios.post('/api/form',{
            name,
            email,
            message
        })

}

  render() {
    return (
      <div className="App">
        <div className="container">
            <Form  onSubmit={this.submitForm} style={{width:600}}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input type="text" name="name" id="exampleEmail" placeholder="Enter Email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Email</Label>
              <Input type="email" name="email" id="examplePassword" placeholder="Enter Password" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="message" id="exampleText" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
        
      </div>
    );
  }
}

export default App;
