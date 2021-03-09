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

/* -------------STORM CENTER PAGE--------------- */

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

function selectRegion() {
  const s = document.querySelector("#selected");
  const sel = document.querySelector("#stormRegion");
  s.style.display = "block";
  s.textContent = sel.value;
}
/* --------------PRESTON 10 PAGE WEATHER API-------------- */

const apiURL =
  "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const temp = jsObject["main"];
    const wind = jsObject["wind"];
    console.log(wind);
    const tempOutput = document.querySelector("#temp");
    const currently = document.querySelector("#currently");
    const humidity = document.querySelector("#humidity");
    const wndSpeed = document.querySelector("#wndSpeed");

    tempOutput.innerHTML = `${temp.temp}`;
    currently.innerHTML = `${jsObject.weather[0].description}`;
    humidity.innerHTML = `${temp.humidity}`;
    console.log(humidity);
    wndSpeed.innerHTML = `${wind.speed}`;

    // -------Windchill Preston 10-------

    var tempF = `${temp.temp}`;
    var windS = `${wind.speed}`;
    console.log(tempF);
    console.log(windS);
    var f = windChill(tempF, windS);

    document.getElementById("windChill").innerHTML =
      f.toFixed(0) + "&deg" + " F";

    function windChill(tempF, windS) {
      var t = tempF;
      var s = windS;

      if (t <= 50 && s > 3.0) {
        return (
          35.74 +
          0.6215 * t -
          35.75 * Math.pow(s, 0.16) +
          0.4275 * t * Math.pow(s, 0.16)
        );
      }

      document.getElementById("windChill").innerHTML = "N/A";
    }
  });

  // ------Preston 10 5 day forecast------

  const forecastURL =
  "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";

  fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastObject) => {
    console.log(forecastObject);

    const forcast = forecastObject["list"];

    const dayOneimg = 'https://openweathermap.org/img/w/' + forecastObject.list[0].weather[0].icon + '.png'; // variable with image address stored concatenated with the API ico code value result
    const dayOneDesc = forecastObject.list[0].weather[0].description;  //  weather array referencing index of icon
    document.getElementById('dayOneIcon').setAttribute('src', dayOneimg);  // setAttribute() src specified by const variable set above
    document.getElementById('dayOneIcon').setAttribute('alt', dayOneDesc);

    const dayOne = document.querySelector("#dayOne");

    dayOne.innerHTML = `${forecastObject.list[0].main.temp.toFixed(0)}`;

    // -------second day-----

    const dayTwoimg = 'https://openweathermap.org/img/w/' + forecastObject.list[1].weather[0].icon + '.png'; // variable with image address stored concatenated with the API ico code value result
    const dayTwoDesc = forecastObject.list[1].weather[0].description;  //  weather array referencing index of icon
    document.getElementById('dayTwoIcon').setAttribute('src', dayTwoimg);  // setAttribute() src specified by const variable set above
    document.getElementById('dayTwoIcon').setAttribute('alt', dayTwoDesc);

    const dayTwo = document.querySelector("#dayTwo");

    dayTwo.innerHTML = `${forecastObject.list[1].main.temp.toFixed(0)}`;
  });