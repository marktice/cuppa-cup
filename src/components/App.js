import React, { Component } from 'react';

import CupItemList from './CupItemList';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cups: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/')
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((cups) => {
        console.log(cups);
        this.setState({ cups, isLoading: false})
      })
      .catch((err) => {
        console.error(err);
      });
  }

  removeCup(id) {
    console.log('id', id)
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    }

    fetch(`http://localhost:3000/${id}`, options)
      .then(res => res.json())
      .then(cup => {
        console.log('deleted cup', cup)
        this.setState((prevState) => {
          return {
            cups: prevState.cups.filter(cup => cup._id !== id)
          }
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    if(this.state.isLoading) {
      return <div>Loading...</div>
    }
    return <CupItemList removeCup={this.removeCup.bind(this)} cups={this.state.cups} />
  }
}

export default App;
