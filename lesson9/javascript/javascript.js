// -----storing resource-----
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';



// -----Fetch-----
fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    //   -----store converted results into array -----
const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) { 
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let bday = document.createElement('p');
      let birthPlace = document.createElement('p');
      let image = document.createElement('img');

h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
bday.textContent = 'Date of Birth:'+ ' ' + prophets[i].birthdate;
birthPlace.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;
image.setAttribute('src', prophets[i].imageurl);
image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets[i].order);

card.appendChild(h2);
card.appendChild(bday);
card.appendChild(birthPlace);
card.appendChild(image);

  document.querySelector('div.cards').appendChild(card);
  } 

});