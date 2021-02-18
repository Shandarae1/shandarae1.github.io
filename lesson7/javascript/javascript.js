const realImages = document.querySelectorAll("[data-src]");

function imgLoad(img) {
  const source = img.getAttribute("data-src");
  if(!source) {
    return;
  }
  img.src = source;
  img.removeAttribute("data-src");
}

const imageOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px"
};

const imageObserver = new IntersectionObserver((items, imageObserver) => {
  items.forEach(item => {
    if(!item.isIntersecting){
      return;
    } 
    else {
      imgLoad(item.target);
      imageObserver.unobserve(item.target);
    }
  })
  }, imageOptions);

realImages.forEach(image => {
  imageObserver.observe(image);
})

