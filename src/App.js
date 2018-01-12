import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Books from './components/Books';

class App extends Component {
  //initialized state
  constructor() {
    super();
    this.state = {
      books: [],
      searchinput: 'Programming Books'
    }
  }

  //fetching data from google api
  componentWillMount() {
    this.getBooks();
  }

  getBooks() {
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q='+this.state.searchinput
    }).then((response) => {
      this.setState({books: response.data.items}, () => {
        console.log('this.state', this.state);
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={8} lg={8}>
              <Books books={this.state.books} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
