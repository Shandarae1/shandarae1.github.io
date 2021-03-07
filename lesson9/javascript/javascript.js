

// ------HOMEPAGE JSON FETCH------

// ------storing resource------

const reqURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// -----Fetch-----

fetch(reqURL)
  .then(function (townresponse) {
    return townresponse.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    //   -----store converted results into array -----

    // ------preston cards------

    const towns = jsonObject["towns"];
    const preston = document.querySelector('div.indexCards');

    const prestonfilter = towns.filter(prestonTown => prestonTown.name === "Preston");
    console.log(prestonfilter);

    prestonfilter.forEach(prestonTown => {

    let prestoncard = document.createElement("section");
    let particle = document.createElement("article");
    let h2 = document.createElement("h2");
    let motto = document.createElement("p");
    let yearFounded = document.createElement("p");
    let population = document.createElement("p");
    let averageRainfall = document.createElement("p");
    let pimg = document.createElement("img");


    h2.innerHTML = `${prestonTown.name}`;
    motto.innerHTML =   `<strong>"${prestonTown.motto}"</strong>`;
    yearFounded.innerHTML = `Year Founded: ${prestonTown.yearFounded}`;
    population.innerHTML = `Population: ${prestonTown.currentPopulation}`;
    averageRainfall.innerHTML = `Annual Rain Fall: ${prestonTown.averageRainfall} inches`;
    prestoncard.setAttribute('class', 'psection')
    pimg.setAttribute('src', 'images/weathergallery12.jpg');
    pimg.setAttribute('alt', `picture of ${prestonTown.name}` );
    pimg.setAttribute("loading", "lazy");
    pimg.setAttribute('class', 'pimg');
    pimg.style.boxShadow = '0 0 30px #777';

      
      preston.append(prestoncard);
      prestoncard.appendChild(pimg);
      prestoncard.appendChild(particle);
      particle.appendChild(h2);
      particle.appendChild(motto);
      particle.appendChild(yearFounded);
      particle.appendChild(population);
      particle.appendChild(averageRainfall);
      
  });

  // ------Fish Haven Cards------

  const fishfilter = towns.filter(fishTown => fishTown.name === "Fish Haven");
  console.log(fishfilter);
  
  const fish = document.querySelector('div.indexCards');

  fishfilter.forEach(fishTown => {

  let fishcard = document.createElement("section");
  let farticle = document.createElement("article");
  let h2 = document.createElement("h2");
  let motto = document.createElement("p");
  let yearFounded = document.createElement("p");
  let population = document.createElement("p");
  let averageRainfall = document.createElement("p");
  let fimg = document.createElement("img");


  h2.innerHTML = `${fishTown.name}`;
  motto.innerHTML =   `<strong>"${fishTown.motto}"</strong>`;
  yearFounded.innerHTML = `Year Founded: ${fishTown.yearFounded}`;
  population.innerHTML = `Population: ${fishTown.currentPopulation}`;
  averageRainfall.innerHTML = `Annual Rain Fall: ${fishTown.averageRainfall} inches`;
  fimg.setAttribute('src', 'images/weathergallery8.jpg');
  fimg.setAttribute('alt', `picture of ${fishTown.name}` );
  fimg.setAttribute("loading", "lazy");
  fimg.setAttribute('class', 'fimg')
  fimg.style.boxShadow = '0 0 30px #777';

    
  fish.append(fishcard);
  fishcard.appendChild(fimg);
  fishcard.appendChild(farticle);
  farticle.appendChild(h2);
  farticle.appendChild(motto);
  farticle.appendChild(yearFounded);
  farticle.appendChild(population);
  farticle.appendChild(averageRainfall);
});
    
  // ------Soda Springs Cards------

  const Sodafilter = towns.filter(SodaTown => SodaTown.name === "Soda Springs")
  console.log(Sodafilter);
  
  const soda = document.querySelector('div.indexCards');

  Sodafilter.forEach(SodaTown => {

  let sodacard = document.createElement("section");
  let sarticle = document.createElement("article");
  let h2 = document.createElement("h2");
  let motto = document.createElement("p");
  let yearFounded = document.createElement("p");
  let population = document.createElement("p");
  let averageRainfall = document.createElement("p");
  let simg = document.createElement("img");

  h2.innerHTML = `${SodaTown.name}`;
  motto.innerHTML =   `<strong>"${SodaTown.motto}"</strong>`;
  yearFounded.innerHTML = `Year Founded: ${SodaTown.yearFounded}`;
  population.innerHTML = `Population: ${SodaTown.currentPopulation}`;
  averageRainfall.innerHTML = `Annual Rain Fall: ${SodaTown.averageRainfall} inches`;
  simg.setAttribute('src', 'images/weathergallery5.jpg');
  simg.setAttribute("loading", "lazy");
  simg.setAttribute('alt', `picture of ${SodaTown.name}` );
  simg.setAttribute('class', 'simg')
  simg.style.boxShadow = '0 0 30px #777';
    
  soda.append(sodacard);
  sodacard.appendChild(simg);
  sodacard.appendChild(sarticle);
  sarticle.appendChild(h2);
  sarticle.appendChild(motto);
  sarticle.appendChild(yearFounded);
  sarticle.appendChild(population);
  sarticle.appendChild(averageRainfall);
});

  });
  
// ------PROPHETS JSON FETCH------

// -----storing resource-----
const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

// -----Fetch-----

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    //   -----store converted results into array -----
    const prophets = jsonObject["prophets"];
    const cards = document.querySelector("div.cards");

    prophets.forEach((prophet) => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let bday = document.createElement("p");
      let birthPlace = document.createElement("p");
      let image = document.createElement("img");

      h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
      bday.innerHTML = `Date of Birth: ${prophet.birthdate}`;
      birthPlace.innerHTML = `Place of Birth: ${prophet.birthplace}`;
      image.setAttribute("src", prophet.imageurl);
      image.setAttribute(
        "alt",
        `${prophet.name} ${prophet.lastname} - ${prophet.order}`
      );
      image.setAttribute("loading", "lazy");

      cards.appendChild(card);
      card.appendChild(h2);
      card.appendChild(bday);
      card.appendChild(birthPlace);
      card.appendChild(image);
    });
  });

// ---------Lazy Load Images---------

// Lazy loading images

const realImages = document.querySelectorAll("[data-src]");

function imgLoad(img) {
  const source = img.getAttribute("data-src");
  if (!source) {
    return;
  }
  img.src = source;
  img.removeAttribute("data-src");
}

const imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px",
};

const imageObserver = new IntersectionObserver((items, imageObserver) => {
  items.forEach((item) => {
    if (!item.isIntersecting) {
      return;
    } else {
      imgLoad(item.target);
      imageObserver.unobserve(item.target);
    }
  });
}, imageOptions);

realImages.forEach((image) => {
  imageObserver.observe(image);
});
