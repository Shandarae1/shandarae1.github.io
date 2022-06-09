//hamburger menu

function toggleMenu() {
  document.getElementById("toggleNav").classList.toggle("hide");
}

//togglelist menu

// function toggleGrid() {
//   document.getElementById("list").classList.toggle("gridview");
// }


function toggleGrid() {
  document.getElementById("list").classList.add("gridview");
}

function toggleList() {
  document.getElementById("list").classList.remove("gridview");
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


      a.setAttribute("href", `${company.weblink}`);
      a.setAttribute("target", "blank");
      companyName.innerHTML = `${company.Name}`;
      companyAddress.innerHTML = `${company.address}<br>${company.city}<br>&#9743; ${company.phone} <br>Website: ${company.weblink}`;
      companyCity.innerHTML = `${company.city}`;
      companyPhone.innerHTML = `&#9743; ${company.phone}`;
      companyWeb.innerHTML = `Website`;
      companyWeb.setAttribute = ("href", `${company.weblink}`)
      companylogo.setAttribute("src", `images/${company.logo}`);
      companylogo.setAttribute("alt", `${company.Name} logo`);
      companylogo.setAttribute("loading", "lazy");

      directory.append(companycard);
      companycard.appendChild(a);
      a.appendChild(companyarticle);
      companyarticle.appendChild(companyName);
      companyarticle.appendChild(companylogo);
      companyarticle.appendChild(companyAddress);


    });
  });

  // fetch(reqURL)
  // .then(function (companyresponse) {
  //   return companyresponse.json();
  // })
  // .then(function (jsonObject) {

  //   const companieslist = jsonObject["Companies"];
  //   const dirlist = document.querySelector("divcardlist");


  //   companieslist.forEach((comp) => {


  //     let lista = document.createElement("a");
  //     let listcard = document.createElement("section");
  //     let listarticle = document.createElement("article");
  //     let listlogo = document.createElement("img");
  //     let listName = document.createElement("h2");
  //     let listAddress = document.createElement("p");
  //     let listCity = document.createElement("p");
  //     let listPhone = document.createElement("p");
  //     let listWeb = document.createElement("p");



  //     lista.setAttribute("href", `${comp.weblink}`)
  //     listName.innerHTML = `${comp.Name}`;
  //     listAddress.innerHTML = `${comp.address}<br>${comp.city}<br>&#9743; ${comp.phone}`;
  //     listCity.innerHTML = `${comp.city}`;
  //     listPhone.innerHTML = `&#9743; ${comp.phone}`;
  //     listWeb.innerHTML = `${comp.weblink}`;
  //     listlogo.setAttribute("src", `images/${comp.logo}`);
  //     listlogo.setAttribute("alt", `${comp.Name} logo`);
  //     listlogo.setAttribute("loading", "lazy");a.setAttribute("href", `${comp.weblink}`)

  //     dirlist.append(listcard);
  //     listcard.appendChild(lista);
  //     lista.appendChild(listarticle);
  //     listarticle.appendChild(listName);
  //     listarticle.appendChild(listlogo);
  //     listarticle.appendChild(listAddress);
  //   });
  // });