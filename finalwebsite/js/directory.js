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


// ------DIRECTORY JSON FETCH------


const reqURL =
  "https://raw.githubusercontent.com/Shandarae1/shandarae1.github.io/master/finalwebsite/JSON/chamber.json";

// -----Fetch-----

fetch(reqURL)
  .then(function (companyresponse) {
    return companyresponse.json();
  })
  .then(function (jsonObject) {

    const companies = jsonObject["Companies"];
    const directory = document.querySelector("div.cards");


    companies.forEach((company) => {
      let a = document.createElement("a");
      let companycard = document.createElement("section");
      let companyarticle = document.createElement("article");
      let companylogo = document.createElement("img");
      let companyName = document.createElement("h2");
      let companyAddress = document.createElement("p");
      let companyCity = document.createElement("p");
      let companyPhone = document.createElement("p");
      let companyWeb = document.createElement("p");

      a.setAttribute("href", `${company.weblink}`)
      companyName.innerHTML = `${company.Name}`;
      companyAddress.innerHTML = `${company.address}`;
      companyCity.innerHTML = `${company.city}`;
      companyPhone.innerHTML = `${company.phone}`;
      companyWeb.innerHTML = `${company.weblink}`;
      companylogo.setAttribute("src", `images/${company.logo}`);
      companylogo.setAttribute("alt", `${company.name} logo`);
      companylogo.setAttribute("loading", "lazy");

      directory.append(companycard);
      companycard.appendChild(a);
      a.appendChild(companyarticle);
      companyarticle.appendChild(companyName);
      companyarticle.appendChild(companylogo);
      companyarticle.appendChild(companyAddress);
      companyarticle.appendChild(companyCity);
      companyarticle.appendChild(companyPhone);
      companyarticle.appendChild(companyWeb);
    });
  });
