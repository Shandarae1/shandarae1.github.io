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
      image.setAttribute("alt", `${prophet.name} ${prophet.lastname} - ${prophet.order}`);
      image.setAttribute("loading", "lazy");

      cards.appendChild(card);
      card.appendChild(h2);
      card.appendChild(bday);
      card.appendChild(birthPlace);
      card.appendChild(image);
    });
  });


