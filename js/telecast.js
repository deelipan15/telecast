//    Overlay to fade on the banner
function ActionHomePage() {
  this.tabSwitch = false;
  this.responsiveMenu = false;
}

ActionHomePage.prototype.handlePageScroll = function handlePageScroll() {
  const getCurrentScrollPos = () => window.scrollY;
  const offsetHeight = () =>
    document.querySelector(".hero-container").offsetHeight;
  const header = document.querySelector("Header");
  if (header) {
    const scrollPosition = () => offsetHeight() - 108;
    const currentScrollPos = getCurrentScrollPos();
    const headerClassList = header.classList;
    if (currentScrollPos >= scrollPosition()) {
      if (!headerClassList.contains("sticky")) {
        headerClassList.add("sticky");
      }
    } else {
      headerClassList.remove("sticky");
    }
  }
};

ActionHomePage.prototype.scrollDown = function scrollDown() {
  const scrollInterval = setInterval(() => {
    if (
      window.scrollY < document.querySelector(".hero-container").offsetHeight
    ) {
      window.scrollBy(0, 20);
    } else clearInterval(scrollInterval);
  }, 15);
};

const actionHomePage = new ActionHomePage();

window.onscroll = () => actionHomePage.handlePageScroll();

// menu
const btnmenu = document.querySelector(".btn-menu");

btnmenu.addEventListener("click", function() {
  const classList = document.querySelector("header").classList;
  if (classList.contains("open")) {
    classList.remove("open");
  } else {
    classList.add("open");
  }
});
// end of menu
