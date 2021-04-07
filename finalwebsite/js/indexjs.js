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

// Last Updated footer

const date = document.lastModified;

document.getElementById("year").textContent = new Date().toLocaleDateString(
  "en-US",
  year
);
document.getElementById("date").textContent = date;

// ------ADS JSON FETCH------

const reqURL =
  "https://raw.githubusercontent.com/Shandarae1/shandarae1.github.io/master/finalwebsite/JSON/chamber.json";

// -----Fetch-----

fetch(reqURL)
  .then(function (companyresponse) {
    return companyresponse.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject["Companies"];
    const directory = document.querySelector("div.companyAds");

    const companyfilter = companies.filter(
      (companyAd) =>
        companyAd.No === "1" || companyAd.No === "2" || companyAd.No === "5"
    );

    companyfilter.forEach((company) => {
      let a = document.createElement("a");
      let companycard = document.createElement("section");
      let companyarticle = document.createElement("article");
      let companylogo = document.createElement("img");
      let companyName = document.createElement("h2");
      let companyAddress = document.createElement("p");
      let companyWeb = document.createElement("p");

      a.setAttribute("href", `${company.weblink}`);
      companyName.innerHTML = `${company.Name}`;
      companyAddress.innerHTML = `${company.address} <br>${company.city} <br>${company.phone}`;
      companyWeb.innerHTML = `${company.weblink}`;
      companylogo.setAttribute("src", `images/${company.logo}`);
      companylogo.setAttribute("alt", `${company.Name} logo`);
      companylogo.setAttribute("loading", "lazy");

      directory.append(companycard);
      companycard.appendChild(a);
      a.appendChild(companyarticle);
      companyarticle.appendChild(companyName);
      companyarticle.appendChild(companyAddress);
      companyarticle.appendChild(companylogo);
    });
  });

// ------weather JSON Fetch------

const aquireURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=47.35896&lon=-122.11796&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";

fetch(aquireURL)
  .then(function (summaryresponse) {
    return summaryresponse.json();
  })
  .then(function (jasnObject) {
    const weather = jasnObject["current"];

    const weatherTemp = document.querySelector("#temp");
    const currentweather = document.querySelector("#currently");
    const weatherhumidity = document.querySelector("#humidity");

    weatherTemp.innerHTML = `${weather.temp.toFixed(0)}`;
    currentweather.innerHTML = `${weather.weather[0].description}`;
    weatherhumidity.innerHTML = `${weather.humidity}`;
  });

// ------weather alert JSON fetch------
const accioURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=47.35896&lon=-122.11796&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";

fetch(accioURL)
  .then(function (alertresponse) {
    return alertresponse.json();
  })
  .then(function (jObject) {
    const wthrAlert = jObject["alerts"];
    const weatherBox = document.getElementById("weatherAlert");

    if (wthrAlert === undefined) {
      
      let alertSection = document.createElement("section");
      let alertP = document.createElement("p");

      alertP.innerHTML = `"No Weather Alert Today"`;

      weatherBox.append(alertSection);
      alertSection.appendChild(alertP);
    }

    let alertSection = document.createElement("section");
    let alertP = document.createElement("p");

    alertP.innerHTML = `<strong>Weather Alert!</strong> ${wthrAlert.event}`;

    weatherBox.append(alertSection);
    alertSection.appendChild(alertP);

    
  });

// ------WEATHER ALERT CLOSE Button------

function closeAlert() {
  const wthrBox = document.querySelector(".alert");
  wthrBox.remove();
}

// ------ 3 day forecast------

// const weekdays = document.querySelector("#weekdays");

// function day() {
//   let day = new Date();
//   let week = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   for (i = 0; i < 3; i++) {
//     let tablehead = document.createElement("th");
//     tablehead.innerHTML = week[(day.getDay() + 1 + i) % 7];
//     weekdays.appendChild(tablehead);
//   }
// }

// day();

// ------3 day forecast JSON fetch------

// const forecastURL =
//   "https://api.openweathermap.org/data/2.5/onecall?lat=47.35896&lon=-122.11796&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";

// fetch(forecastURL)
//   .then((response) => response.json())
//   .then((forecastObject) => {
//     const forecast = forecastObject["daily"];
//     const table = document.querySelector("#forecast3day");

//     let tabledata0 = document.createElement("td");
//     let tabledata1 = document.createElement("td");
//     let tabledata2 = document.createElement("td");

//     tabledata0.innerHTML = `${forecast[0].temp.day.toFixed(0)}&deg;F`;
//     tabledata1.innerHTML = `${forecast[1].temp.day.toFixed(0)}&deg;F`;
//     tabledata2.innerHTML = `${forecast[2].temp.day.toFixed(0)}&deg;F`;

//     table.appendChild(tabledata0);
//     table.appendChild(tabledata1);
//     table.appendChild(tabledata2);
//   });

const forecastURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=47.35896&lon=-122.11796&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";

fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastObject) => {
    const forecast = forecastObject["daily"];
    const table = document.querySelector("#weekdays");

    console.log(forecast);

    let tablerow = document.createElement("tr");
    let caption = document.createElement("caption");
    let tabledata0 = document.createElement("td");
    let tabledata1 = document.createElement("td");
    let tabledata2 = document.createElement("td");

    caption.innerHTML = "3 Day Forecast";
    tabledata0.innerHTML = `${forecast[0].temp.day.toFixed(0)}&deg;F`;
    tabledata1.innerHTML = `${forecast[1].temp.day.toFixed(0)}&deg;F`;
    tabledata2.innerHTML = `${forecast[2].temp.day.toFixed(0)}&deg;F`;

 table.appendChild(caption);
  table.appendChild(tablerow);  
    tablerow.appendChild(tabledata0);
    tablerow.appendChild(tabledata1);
    tablerow.appendChild(tabledata2);
  });

const weekdays = document.querySelector("#weekdays");

function day() {
  let day = new Date();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  for (i = 0; i < 3; i++) {
    let tablehead = document.createElement("th");
    tablehead.innerHTML = week[(day.getDay() + 1 + i) % 7];
    weekdays.appendChild(tablehead);
  }
}

day();
