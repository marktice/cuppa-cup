import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

const cupForm = document.querySelector('form');

fetch('http://localhost:3000/')
  .then((response) => {return response.json()})
  .then((cups) => {
    console.log(cups);
    ReactDOM.render(<App cups={cups}/>, document.querySelector('.card-group'));
  }).catch((err) => {console.log(err)});

cupForm.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const formElements = e.target.elements;
  const name = formElements.name.value;
  const color = formElements.color.value;
  const material = formElements.material.value;
  
  const tassels = formElements.tassels.checked;
  const pomPoms = formElements.pomPoms.checked;
  const knitedCupSweater = formElements.knitedCupSweater.checked;
  const chimes = formElements.chimes.checked;
  const charms = formElements.charms.checked;
  const bluetoothSpeakers = formElements.bluetoothSpeakers.checked;

  const cup = {
    name,
    color,
    material,
    accessories: {
      tassels,
      pomPoms,
      knitedCupSweater,
      chimes,
      charms,
      bluetoothSpeakers
    }
  }

  postCup(cup)
    .then((cup) => {
      console.log(cup);
      e.target.reset()
      return createCupCard(cup)
    }).then((el) => {
      cupsList.prepend(el);
    }).catch((err) => {
      console.log(err);
    });
}

function postCup(cup) {
  const url = 'http://localhost:3000/';
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cup)
  }
  return fetch(url, options)
          .then((response) => {return response.json()})
          .catch((err) => {console.log(err)});
};
