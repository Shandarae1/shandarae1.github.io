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

// ---------Lazy Load Images---------

// Lazy loading images

const realImages = document.querySelectorAll("[data-src]");

function imgLoad(img) {
  const source = img.getAttribute("data-src");
  if(!source) {
    return;
  }
  img.src = source;
  img.removeAttribute("data-src");
}

const imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px"
};

const imageObserver = new IntersectionObserver((items, imageObserver) => {
  items.forEach(item => {
    if(!item.isIntersecting){
      return;
    } 
    else {
      imgLoad(item.target);
      imageObserver.unobserve(item.target);
    }
  })
  }, imageOptions);

realImages.forEach(image => {
  imageObserver.observe(image);
})

