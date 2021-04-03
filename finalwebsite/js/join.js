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
  
// Last Updated footer

const date = document.lastModified;

document.getElementById("year").textContent = new Date().toLocaleDateString(
  "en-US",
  year
);
document.getElementById("date").textContent = date;

  // ------Join dropdown------

  function selectLevel() {
    const s = document.querySelector("#selected");
    const sel = document.querySelector("#memberLevel");
    s.style.display = "block";
    s.textContent = sel.value;
  }