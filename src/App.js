import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import Header from './components/Header';
import Books from './components/Books';
import SearchBar from './components/Searchbar';
import './App.css';

class App extends Component {
  //initialized state
  constructor(){
    super();
    this.state = {
      books:[],
      text:'Self improvement'
    }
  }

  //fetching data from google api
  componentWillMount(){
    this.getBooks();
  }

  getBooks(){
    axios.request({
      method:'get',
      url:'https://www.googleapis.com/books/v1/volumes?q='+this.state.text
    }).then((response) => {
      this.setState({books: response.data.items}, () => {
        console.log(this.state);
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange(text){
    this.setState({text: text}, this.getBooks());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <SearchBar onChange={this.handleChange.bind(this)} value={this.state.text} />
              <Books books={this.state.books} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
