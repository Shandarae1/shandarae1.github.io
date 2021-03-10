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
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    const temp = jsObject["main"];
    const wind = jsObject["wind"];
    // console.log(wind);
    const tempOutput = document.querySelector("#temp");
    const currently = document.querySelector("#currently");
    const humidity = document.querySelector("#humidity");
    const wndSpeed = document.querySelector("#wndSpeed");

    tempOutput.innerHTML = `${temp.temp.toFixed(0)}`;
    currently.innerHTML = `${jsObject.weather[0].description}`;
    humidity.innerHTML = `${temp.humidity}`;
    // console.log(humidity);
    wndSpeed.innerHTML = `${wind.speed}`;

    // -------Windchill Preston 10-------

    var tempF = `${temp.temp}`;
    var windS = `${wind.speed}`;
    // console.log(tempF);
    // console.log(windS);
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

    const forecast = forecastObject["list"];
    const table = document.querySelector("#forcast5day");

    const forecastfilter = forecast.filter((x) =>
      x.dt_txt.includes("18:00:00")
    );
    console.log(forecastfilter);

    forecastfilter.forEach((filtered) => {
      let tableimg = document.createElement("img");
      let tabledata = document.createElement("td");

      let tableimgURL =
        "https://openweathermap.org/img/w/" +
        `${filtered.weather[0].icon}` +
        ".png";
      tableimg.setAttribute("src", tableimgURL);
      tableimg.setAttribute("alt", `${filtered.weather[0].description}`);

      tabledata.innerHTML = `${filtered.main.temp.toFixed(0)}&deg;F`;
      console.log(tableimgURL);

      table.appendChild(tabledata);
    });
  });
