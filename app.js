let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-section__toggle");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle("on", show);
  show = !show;
});

const menuItems = document.querySelectorAll(".menu-list__item a");

for (let values of menuItems) {
  values.addEventListener("click", () => {
    menuItems.forEach((item) => {
      item.classList.contains("selected")
        ? item.classList.remove("selected")
        : null;
    });
    values.classList.toggle("selected")
  });
}
