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

  // ------Preston Events JSON FETCH------

// ------storing resource------

const procureURL = "https://byui-cit230.github.io/weather/data/towndata.json";

// -----Fetch-----

fetch(procureURL)
  .then(function (eventresponse) {
    return eventresponse.json();
  })
  .then(function (jsnObject) {

    //   -----store converted results into array -----


    const towns = jsnObject["towns"];
    const upcomingEvents = document.querySelector('div.events');

    const eventfilter = towns.filter(town => town.name === "Preston");

    eventfilter.forEach(town => {

    let eventBox = document.createElement("section")
      let eventH3 = document.createElement("h3");
    let eventhr = document.createElement("hr");
    let eventP0 = document.createElement("p");
    let eventP1 = document.createElement("p");
    let eventP2 = document.createElement("p");

      eventH3.innerHTML = `Upcoming Events:`;
      eventP0.innerHTML = `${town.events[0]}`;
      eventP1.innerHTML = `${town.events[1]}`;
      eventP2.innerHTML = `${town.events[2]}`;


      upcomingEvents.append(eventBox);
      eventBox.appendChild(eventH3);
      eventBox.appendChild(eventhr);
      eventBox.appendChild(eventP0)
      eventBox.appendChild(eventP1);
      eventBox.appendChild(eventP2);

      
  });
  });
  
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
  
  
  /* -------------- WEATHER API-------------- */
  
  const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";
  
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      const temp = jsObject["main"];
      const wind = jsObject["wind"];
  
      const tempOutput = document.querySelector("#temp");
      const currently = document.querySelector("#currently");
      const humidity = document.querySelector("#humidity");
      const wndSpeed = document.querySelector("#wndSpeed");
  
      tempOutput.innerHTML = `${temp.temp.toFixed(0)}`;
      currently.innerHTML = `${jsObject.weather[0].description}`;
      humidity.innerHTML = `${temp.humidity}`;
      wndSpeed.innerHTML = `${wind.speed}`;
  
      // -------Windchill Preston -------
  
      var tempF = `${temp.temp}`;
      var windS = `${wind.speed}`;
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
  
  // ------ 5 day forecast------
  
  const weekdays = document.querySelector("#weekdays");
  
  function day() {
    let day = new Date();
    let week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  
    for (i = 0; i < 5; i++) {
      let tablehead = document.createElement("th");
      tablehead.innerHTML = week[(day.getDay() + 1 + i) % 7];
      weekdays.appendChild(tablehead);
    }
  }
  
  day();
  
  const forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";
  
  fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
      const forecast = forecastObject["list"];
      const table = document.querySelector("#forcast5day");
  
      const forecastfilter = forecast.filter((x) =>
        x.dt_txt.includes("18:00:00")
      );
  
      forecastfilter.forEach((filtered) => {
        let tableimg = document.createElement("img");
        let tabledata = document.createElement("td");
        let tabledescription = document.createElement("p");
  
        let tableimgURL =
          "https://openweathermap.org/img/w/" +
          `${filtered.weather[0].icon}` +
          ".png";
        tableimg.setAttribute("src", tableimgURL);
        tableimg.setAttribute("alt", `${filtered.weather[0].description}`);
  
        tabledescription = `${filtered.weather[0].description}`;
        tabledata.innerHTML = `${filtered.main.temp.toFixed(0)}&deg;F`;
  
        table.appendChild(tabledata);
        tabledata.append(tableimg);
        tabledata.append(tabledescription);
      });
    });


  