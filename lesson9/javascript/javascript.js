// ------HOMEPAGE JSON FETCH------

// ------storing resource------

const reqURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// -----Fetch-----

fetch(reqURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    //   -----store converted results into array -----

    const towns = jsonObject["towns"];

    let Card = document.createElement("section");
    let h2 = document.createElement("h2");
    let motto = document.createElement("p");
    let yearFounded = document.createElement("p");
    let averageRainfall = document.createElement("p");

    h2.textContent = towns[5].name;
    motto.textContent = '"' + towns[5].motto + '"';
    yearFounded.textContent = "Year Founded: " + towns[5].yearFounded;
    averageRainfall.textContent =
      "Annual Rain Fall: " + towns[5].averageRainfall + " inches.";

    Card.appendChild(h2);
    Card.appendChild(motto);
    Card.appendChild(yearFounded);
    Card.appendChild(averageRainfall);

    document.querySelector("div.prestonCard", "div.fishCard").appendChild(Card);
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
    console.table(jsonObject);
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
