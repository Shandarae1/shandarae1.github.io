// ------HOMEPAGE JSON FETCH------
  
  // ------storing resource------
  
  const reqURL = "JSON/chamber.json";
  
  // -----Fetch-----
  
  fetch(reqURL)
    .then(function (companyresponse) {
      return companyresponse.json();
    })
    .then(function (jsonObject) {
      //   -----store converted results into array -----
  
      // ------town cards------
  
      const companies = jsonObject["Companies"];
      const directory = document.querySelector("div.indexCards");

      console.log(companies);

      companies.forEach((company) => {
          let companycard = document.createElement("secion");
          let companyarticle = document.createElement("article");
          let companylogo = document.createElement("img");
          let companyName = document.createElement("h2");
          let companyAddress = document.createElement("p");
          let companyCity = document.createElement("p");
          let companyPhone = document.createElement("p");
          let companyWeb = document.createElement("p");
      
          companyName.innerHTML = `${company.Name}`;
          companyAddress.innerHTML = `${company.address}`;
          companyCity.innerHTML = `${company.city}`;
          companyPhone.innerHTML = `${company.phone}`;
          companyWeb.innerHTML = `${company.weblink}`;
          companylogo.setAttribute("src", `images/${company.logo}`);
          companylogo.setAttribute("alt", `${company.name} logo`);
          companylogo.setAttribute("loading", "lazy");

          directory.append(companycard);
          companycard.appendChild(companylogo);
          companycard.appendChild(companyarticle);
          companyarticle.appendChild(companyName);
          companyarticle.appendChild(companyAddress);
          companyarticle.appendChild(companyCity);
          companyarticle.appendChild(companyPhone);
          companyarticle.appendChild(companyWeb);
        });
    });
