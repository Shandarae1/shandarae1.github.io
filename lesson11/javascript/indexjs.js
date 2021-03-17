  // Friday banner pop up

function showhide() {
    var d = new Date();
    var s = document.getElementById("announcement");
    if (d.getDay() == 5) {
      s.style.display = s.style.display == "block" ? "none" : "block";
    }
  }
  showhide();
  
  //hamburger menu
  
  function toggleMenu() {
    document.getElementById("toggleNav").classList.toggle("hide");
  }
  
  //footer year
  
  const year = { year: "numeric" };
  
  document.getElementById("year").textContent = new Date().toLocaleDateString(
    "en-US",
    year
  );
  
  // current date footer
  
  const now = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  
  const datefield = document.getElementById("date");
  
  datefield.textContent = fulldate;
  
  // ------HOMEPAGE JSON FETCH------

// ------storing resource------

const reqURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// -----Fetch-----

fetch(reqURL)
  .then(function (townresponse) {
    return townresponse.json();
  })
  .then(function (jsonObject) {

    //   -----store converted results into array -----

    // ------preston cards------

    const towns = jsonObject["towns"];
    const preston = document.querySelector('div.indexCards');

    const prestonfilter = towns.filter(prestonTown => prestonTown.name === "Preston");

    prestonfilter.forEach(prestonTown => {

    let prestoncard = document.createElement("section");
    let particle = document.createElement("article");
    let h2 = document.createElement("h2");
    let motto = document.createElement("p");
    let yearFounded = document.createElement("p");
    let population = document.createElement("p");
    let averageRainfall = document.createElement("p");
    let pimg = document.createElement("img");


    h2.innerHTML = `<a href = "preston.html">${prestonTown.name}</a>`;
    motto.innerHTML =   `<strong>"${prestonTown.motto}"</strong>`;
    yearFounded.innerHTML = `Year Founded: ${prestonTown.yearFounded}`;
    population.innerHTML = `Population: ${prestonTown.currentPopulation}`;
    averageRainfall.innerHTML = `Annual Rain Fall: ${prestonTown.averageRainfall} inches`;
    prestoncard.setAttribute('class', 'psection');
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


  h2.innerHTML = `<a href = "fishhaven.html">${fishTown.name}</a>`;
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

  h2.innerHTML = `<a href = "sodasprings.html">${SodaTown.name}</a>`;
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

