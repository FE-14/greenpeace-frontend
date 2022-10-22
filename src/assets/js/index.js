// Handle close and open navbar when screen < lg (Tailwind Brekpoints)
const buttonCloseSidebarElement = document.querySelector("#btn-close-sidebar");
const buttonMenuElement = document.querySelector("#btn-open-navbar");
const navbarElement = document.querySelector("nav");

buttonMenuElement.addEventListener("click", () => {
  console.log("oek");
  navbarElement.classList.remove("-top-[100vh]");
  navbarElement.classList.add("top-0");
  document.body.classList.add("overflow-y-hidden");
});

buttonCloseSidebarElement.addEventListener("click", () => {
  navbarElement.classList.add("-top-[100vh]");
  navbarElement.classList.remove("top-0");
  document.body.classList.remove("overflow-y-hidden");
});
