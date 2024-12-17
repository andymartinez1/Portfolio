// HAMBURGER MENU
const navLinks = document.querySelector(".navbar-links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".navbar-list-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  })
);

// PROJECTS SLIDER
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// SCROLL TO TOP BUTTON
const scrollToTop = document.querySelector(".scroll-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
}

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});
