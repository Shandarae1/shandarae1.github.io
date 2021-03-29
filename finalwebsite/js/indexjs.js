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
      let companyWeb = document.createElement("p");

      a.setAttribute("href", `${company.weblink}`);
      companyName.innerHTML = `${company.Name}`;
      companyWeb.innerHTML = `${company.weblink}`;
      companylogo.setAttribute("src", `images/${company.logo}`);
      companylogo.setAttribute("alt", `${company.name} logo`);
      companylogo.setAttribute("loading", "lazy");

      directory.append(companycard);
      companycard.appendChild(a);
      a.appendChild(companyarticle);
      companyarticle.appendChild(companyName);
      companyarticle.appendChild(companylogo);
      companyarticle.appendChild(companyWeb);
    });
  });


// ------EVENTS JSON FETCH------

const getURL =
  "https://raw.githubusercontent.com/Shandarae1/shandarae1.github.io/master/finalwebsite/JSON/index.json";

fetch(getURL)
  .then(function (eventresponse) {
    return eventresponse.json();
  })
  .then(function (jsnObject) {
    const events = jsnObject["Events"];
    const eventBox = document.querySelector("div.events");


    events.forEach((event) => {
      let eventcard = document.createElement("section");
      let eventh3 = document.createElement("h3");
      let eventhr = document.createElement("hr");
      let eventp1 = document.createElement("p");
      let eventp2 = document.createElement("p");
      let eventp3 = document.createElement("p");
      
      eventh3.innerHTML = `${event.Title}`;
      eventp1.innerHTML = `${event.Date}`;
      eventp2.innerHTML = `${event.Time}`;
      eventp3.innerHTML = `${event.Location}`;

      eventBox.append(eventcard);
      eventcard.appendChild(eventh3);
      eventcard.appendChild(eventhr);
      eventcard.appendChild(eventp1);
      eventcard.appendChild(eventp2);
      eventcard.appendChild(eventp3);
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

//     const accioURL =
//     "https://api.openweathermap.org/data/2.5/onecall?lat=47.35896&lon=-122.11796&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";
  
  
//   fetch(accioURL)
//     .then(function (alertresponse) {
//       return alertresponse.json();
//     })
//     .then(function (jObject) {
//       const wthrAlert = jObject["alerts"];
//       const weatherBox = document.getElementById("weatherAlert");

//       console.log(wthrAlert);



//   let alertSection = document.createElement("section");
//   let alertP = document.createElement("p")
//   let button = document.createElement("button");

//   button.setAttribute('onclick', 'closeAlert()')
//   button.setAttribute('class', 'closeButton')
//   button.innerHTML = `close`;
//   alertP.innerHTML = `<strong>Weather Alert!</strong> ${wthrAlert.events}`;

//   weatherBox.append(alertSection);
//   alertSection.appendChild(alertP);
//   alertSection.appendChild(button);
// })

// ------WEATHER ALERT CLOSE Button------

function closeAlert() {
  const wthrBox = document.querySelector(".alert");
  wthrBox.remove();
}

// ------ 3 day forecast------

const weekdays = document.querySelector("#weekdays");

function day() {
  let day = new Date();
  let week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  for (i = 0; i < 3; i++) {
    let tablehead = document.createElement("th");
    tablehead.innerHTML = week[(day.getDay() + 1 + i) % 7];
    weekdays.appendChild(tablehead);
  }
}

day();

// ------3 day forecast JSON fetch------

const forecastURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=47.35896&lon=-122.11796&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";

fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastObject) => {
    const forecast = forecastObject["daily"];
    const table = document.querySelector("#forcast3day");

    

    const threedayfilter = forecast.filter((day) => day[0].weather[0] || day[1].weather[0] || day[2].weather[0]);

    console.log(threedayfilter);

threedayfilter.forEach((day) => {
      let tableimg = document.createElement("img");
      let tabledata = document.createElement("td");
      let tabledescription = document.createElement("p");

      let tableimgURL =
        "https://openweathermap.org/img/w/" +
        `${threedayfilter.weather.icon}` +
        ".png";
      tableimg.setAttribute("src", tableimgURL);
      tableimg.setAttribute("alt", `${threedayfilter.weather.description}`);

      tabledescription = `${threedayfilter.weather.description}`;
      tabledata.innerHTML = `${threedayfilter.temp.day.toFixed(0)}&deg;F`;

      table.appendChild(tabledata);
      tabledata.append(tableimg);
      tabledata.append(tabledescription);
});
  });