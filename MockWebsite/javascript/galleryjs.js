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

// Lazy loading images

const realImages = document.querySelectorAll("[data-src]");

function imgLoad(img) {
  const source = img.getAttribute("data-src");
  if (!source) {
    return;
  }
  img.src = source;
  img.removeAttribute("data-src");
}

const imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px",
};

const imageObserver = new IntersectionObserver((items, imageObserver) => {
  items.forEach((item) => {
    if (!item.isIntersecting) {
      return;
    } else {
      imgLoad(item.target);
      imageObserver.unobserve(item.target);
    }
  });
}, imageOptions);

realImages.forEach((image) => {
  imageObserver.observe(image);
});
