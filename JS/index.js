// javascript

const get = (element) => document.getElementById(element);

let open = get("menu-btn");
let nav = get("nav");
let exit = get("exit-btn");
let own = get("own");

open.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

exit.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

own.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
