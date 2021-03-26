

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

  const companyfilter = companies.filter((companyAd) => companyAd.No === "1" || companyAd.No === "2" || companyAd.No === "5");

  console.log(companyfilter);

  companyfilter.forEach((company) => {
    let a = document.createElement("a");
    let companycard = document.createElement("section");
    let companyarticle = document.createElement("article");
    let companylogo = document.createElement("img");
    let companyName = document.createElement("h2");
    let companyWeb = document.createElement("p");

    a.setAttribute("href", `${company.weblink}`)
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

const getURL = "https://raw.githubusercontent.com/Shandarae1/shandarae1.github.io/master/finalwebsite/JSON/chamber.json";

fetch(getURL)
.then(function (eventresponse) {
  return eventresponse.json();
})
.then(function (jsnObject) {

  const events = jsnObject["Events"];
  const eventBox = document.querySelector("div.events");

  console.log(events);

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
  })
});
  

  