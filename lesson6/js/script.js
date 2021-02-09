const year = { year: "numeric" };

document.getElementById("year").textContent = new Date().toLocaleDateString(
  "en-US",
  year
);

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

const datefield = document.getElementById("date");

datefield.textContent = fulldate;

function toggleMenu() {
  document.getElementById("toggleNav").classList.toggle("hide");
}

function showhide() {
  var d = new Date();
  var s = document.getElementById("announcement");
  if (d.getDay() == 5) {
    s.style.display = s.style.display == "block" ? "none" : "block";
  }
}
showhide();