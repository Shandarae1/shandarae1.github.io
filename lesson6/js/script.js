// Friday banner pop up

function showhide() {
  var d = new Date();
  var s = document.getElementById("announcement");
  if (d.getDay() == 5) {
    s.style.display = 
    s.style.display == "block" ? "none" : "block";
  }
  
}
showhide();

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



/* -------------STORM CENTER PAGE--------------- */

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

function selectRegion() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#stormRegion');
	s.style.display = "block";
	s.textContent = sel.value;
	
}
/* ---------------------------- */


