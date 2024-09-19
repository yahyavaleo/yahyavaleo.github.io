document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".article-accordion");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  const setTabIndex = (accordion, value) => {
    const focusableElements = accordion.querySelectorAll(
      "a, button, input, textarea, select"
    );
    focusableElements.forEach((el) => {
      el.tabIndex = value;
    });
  };

  const openAccordion = (accordion) => {
    const content = accordion.querySelector(".article-content");
    accordion.classList.add("expanded");
    accordion.style.maxHeight = content.scrollHeight + 90 + "px";
    setTabIndex(accordion, 0);
  };

  const closeAccordion = (accordion) => {
    accordion.classList.remove("expanded");
    accordion.style.maxHeight = null;
    setTabIndex(accordion, -1);
  };

  accordions.forEach((accordion) => {
    const header = accordion.querySelector(".article-header");
    const isExpanded = accordion.classList.contains("expanded");

    if (!isExpanded) {
      setTabIndex(accordion, -1);
    }

    header.onclick = () => {
      if (accordion.style.maxHeight) {
        closeAccordion(accordion);
      } else {
        openAccordion(accordion);
      }
    };
  });

  const currentYear = new Date().getFullYear();
  document.querySelector(".copyright-year").textContent = currentYear;

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("show");
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      hamburgerMenu.classList.remove("active");
      mobileMenu.classList.remove("show");
    });
  });
});
