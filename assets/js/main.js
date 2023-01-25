// OPEN TAB ON CLICK
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
  // get the name tab on click for tab link and tab content
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  // underline on active link
  event.currentTarget.classList.add("active-link");

  // show current active tab by name tab
  document.getElementById(tabname).classList.add("active-tab");
}

// SIDE MENU
let sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-10rem";
}

// SCROLL REVEAL ANIMATION
const scrollRev = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 2000,
  reset: true,
});

scrollRev.reveal(
  `.logo, .my-photo, .header-description, .about, .portfolio, .website-projects, .software-testing-projects, .databases-projects`,
  {
    interval: 300,
  }
);
