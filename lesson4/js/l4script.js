const year = { year: "numeric" };

const date = document.lastModified;

document.getElementById("year").textContent = new Date().toLocaleDateString(
  "en-US",
  year
);

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

const datefield = document.querySelector("date");

datefield.textContent = fulldate;
function toggleMenu() {
    
  document.getElementById("toggleNav").classList.toggle("hide");
  
}