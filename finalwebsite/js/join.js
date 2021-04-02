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

  // ------Join dropdown------

  function selectLevel() {
    const s = document.querySelector("#selected");
    const sel = document.querySelector("#memberLevel");
    s.style.display = "block";
    s.textContent = sel.value;
  }