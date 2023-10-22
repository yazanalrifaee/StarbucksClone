document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu-icon");
  let navbar = document.querySelector(".navbar");
  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
  };
  document.addEventListener("scroll", showScroll);
});
document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.getElementById("scroll-button");
  var targetSection = document.getElementById("about-section");

  scrollButton.addEventListener("click", function () {
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function showScroll() {
  const button = document.getElementById("back-to-top-btn");
  if (window.scrollY > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
function displayGreeting() {
  var date = new Date();
  var hour = date.getHours();
  var greetingElement = document.getElementById("greeting");

  if (hour < 12) {
    greetingElement.textContent = "Good morning! Welcome to Starbucks";
  } else if (hour < 18) {
    greetingElement.textContent = "Good afternoon! Welcome to Starbucks";
  } else {
    greetingElement.textContent = "Good evening! Welcome to Starbucks";
  }
}
