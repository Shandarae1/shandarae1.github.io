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

  // ------EVENTS JSON FETCH------

  const getURL =
  "https://raw.githubusercontent.com/Shandarae1/shandarae1.github.io/master/finalwebsite/JSON/index.json";

fetch(getURL)
  .then(function (eventresponse) {
    return eventresponse.json();
  })
  .then(function (jsnObject) {
    const events = jsnObject["Events"];
    const eventBox = document.querySelector("div.covevents");


    events.forEach((event) => {
      let eventcard = document.createElement("section");
      let eventh3 = document.createElement("h3");
      let eventhr = document.createElement("hr");
      let eventp1 = document.createElement("p");
      let eventp2 = document.createElement("p");
      let eventp3 = document.createElement("p");
      let eventimg = document.createElement("img");
      let eventa = document.createElement("a");
      let eventcredit = document.createElement("p");
      
      
      eventh3.innerHTML = `${event.Title}`;
      eventp1.innerHTML = `${event.Date} ${event.Time}`;
      eventp2.innerHTML = `${event.Time}`;
      eventp3.innerHTML = `${event.Location}`;
      eventimg.setAttribute("src", `${event.photo}`);
      eventimg.setAttribute("alt", `photo of ${event.Title}`);
      eventimg.setAttribute("loading", "lazy");
      eventa.setAttribute("href", `${event.credit}`);
      eventcredit.innerHTML = `image credit`;


      eventBox.append(eventcard);
      eventcard.appendChild(eventhr);
      eventcard.appendChild(eventh3);
      eventcard.appendChild(eventp1);
      eventcard.appendChild(eventp3);
      eventcard.appendChild(eventimg);
      eventcard.appendChild(eventa);
      eventa.appendChild(eventcredit);
    });
  });