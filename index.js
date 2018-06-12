
function createCupItem(cup) {
  const li = document.createElement('li');
  const cupElement = document.createElement('p');
  cupElement.textContent = cup.color;
  li.appendChild(cupElement);
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
    
  });
