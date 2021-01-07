const year = { year: "numeric" };

let date = new Date(document.lastModified);

document.getElementById("year").textContent = new Date().toLocaleDateString(
  "en-US",
  year
);
document.getElementById("date").textContent = date;
console.log(date);
