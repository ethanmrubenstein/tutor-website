// Toggle Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const toggleButtonIcon = document.querySelector(
    ".navbar .mobile-menu-toggle i"
  );
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      toggleButtonIcon.classList.add("fa-bars");
      toggleButtonIcon.classList.remove("fa-x");
    });
    mobileMenu.classList.toggle("active");
    if (mobileMenu.classList.contains("active")) {
      toggleButtonIcon.classList.remove("fa-bars");
      toggleButtonIcon.classList.add("fa-x");
    } else if (!mobileMenu.classList.contains("active")) {
      toggleButtonIcon.classList.add("fa-bars");
      toggleButtonIcon.classList.remove("fa-x");
    }
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});
