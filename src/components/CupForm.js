import React from "react";

class CupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(cup) {
    alert('A name was submitted: ' + this.state.value);
    cup.preventDefault();
    
    const url = 'http://localhost:3000/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cup)
    }

    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((cup) => {
        return cup
      })
      .catch((err) => {
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CupForm;
