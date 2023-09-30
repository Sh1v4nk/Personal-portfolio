const navbar = document.getElementById("navbar");

//  menu button in smaller mobile
function showMenu() {
  navbar.style.right = "0";
}

function hideMenu() {
  navbar.style.right = "-400px";
}

//  typing animation
const typed = new Typed("#element", {
  strings: [
    "Learner.",
    "Coding Adventurer.",
    "Digital Explorer.",
    "Gamer for Fun.",
  ],
  typeSpeed: 30,
  loop: true,
  backSpeed: 25,
  backDelay: 1000,
});

//  scroll-based navigation active
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  const top = window.scrollY;

  sections.forEach((section) => {
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navbarLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href="#${id}"]`)
        .classList.add("active");
    }
  });
};
