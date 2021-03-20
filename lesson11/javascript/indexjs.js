

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

    // ------town cards------

    const towns = jsonObject["towns"];
    const preston = document.querySelector("div.indexCards");

    const prestonfilter = towns.filter(
      (prestonTown) =>
        prestonTown.name === "Preston" || prestonTown.name === "Soda Springs" || prestonTown.name === "Fish Haven"
    );

    prestonfilter.forEach((prestonTown) => {
      let prestoncard = document.createElement("section");
      let particle = document.createElement("article");
      let h2 = document.createElement("h2");
      let motto = document.createElement("p");
      let yearFounded = document.createElement("p");
      let population = document.createElement("p");
      let averageRainfall = document.createElement("p");
      let pimg = document.createElement("img");

      h2.innerHTML = `${prestonTown.name}`;
      motto.innerHTML = `<strong>"${prestonTown.motto}"</strong>`;
      yearFounded.innerHTML = `Year Founded: ${prestonTown.yearFounded}`;
      population.innerHTML = `Population: ${prestonTown.currentPopulation}`;
      averageRainfall.innerHTML = `Annual Rain Fall: ${prestonTown.averageRainfall} inches`;
      prestoncard.setAttribute("class", `${prestonTown.photo}`);
      pimg.setAttribute("src", `images/${prestonTown.photo}`);
      pimg.setAttribute("alt", `${prestonTown.name} image`)
      pimg.setAttribute("loading", "lazy");
      pimg.setAttribute("class", "pimg");
      pimg.style.boxShadow = "0 0 30px #777";

      preston.append(prestoncard);
      prestoncard.appendChild(pimg);
      prestoncard.appendChild(particle);
      particle.appendChild(h2);
      particle.appendChild(motto);
      particle.appendChild(yearFounded);
      particle.appendChild(population);
      particle.appendChild(averageRainfall);

    });
  });

