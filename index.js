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

const cupsList = document.querySelector('ul');

fetchCups()
  .then((cups) => {
    cups.forEach(cup => {
      cupsList.appendChild(createCupItem(cup))
    });
  }).catch((err) => {
    console.log(err);
  });
