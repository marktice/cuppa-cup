const cupsList = document.querySelector('ul');
const cupForm = document.querySelector('form');

function createCupItem(cup) {
  const li = document.createElement('li');
  
  const div = document.createElement('div');
  div.className = 'card border-secondary mb-3';
  div.style.maxWidth = "18rem"

  // second lvl
  const divHeader = document.createElement('div');
  divHeader.classList.add('card-header');
  divHeader.textContent = `A ${cup.color} Cup`;

  const divContent = document.createElement('div');
  divContent.classList.add('card-body');
  
  // 3rd lvl
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = `Awesome ${cup.color} Cup`;
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = `Material: ${cup.material}`;
  
  divContent.appendChild(h5);
  divContent.appendChild(p);
  div.appendChild(divHeader)
  div.appendChild(divContent);
  li.appendChild(div);

  return li;
}

async function fetchCups() {
  const url = 'http://localhost:3000/';
  const response = await fetch(url);
  return await response.json();
};

fetchCups().then((cups) => {
  cups.forEach(cup => {
    cupsList.appendChild(createCupItem(cup))
  });
}).catch((err) => {
  console.log(err);
});

cupForm.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  const formElements = e.target.elements;
  const color = formElements.color.value;
  const material = formElements.material.value;

  const cup = {
    color,
    material
  }

  postCup(cup).then((cup) => {
    e.target.reset()
    return createCupItem(cup)
  }).then((el) => {
    cupsList.prepend(el);
  }).catch((err) => {
    console.log(err);
  });
}

async function postCup(cup) {
  const url = 'http://localhost:3000/';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cup)
  }
  const response = await fetch(url, options);
  const newCup = await response.json();
  return newCup;
};
