const year = { year: "numeric" };

const date = document.lastModified;

document.getElementById("year").textContent = new Date().toLocaleDateString(
  "en-US",
  year
);
document.getElementById("date").textContent = date;
console.log(date);