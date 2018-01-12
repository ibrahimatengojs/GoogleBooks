import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import Books from './Components/Books';

class App extends Component {
  //initialized state
  constructor() {
    super(props);
    this.state = {
      books: [],
      searchinput: 'Programming Books'
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={8} lg={8}>
              <Books />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
