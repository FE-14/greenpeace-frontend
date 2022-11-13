import { useState } from "./modules/index.js";

// handle search articles on the search bar at the navbar
const navbarFormElement = document.querySelector("form#navbar-form");
const searchFieldElement = document.querySelector("input#search-field");
let [searchValue, setSearchValue] = useState("");

navbarFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  window.location.href = `/search/index.html?q=${searchValue}`;
});

searchFieldElement.addEventListener("change", (event) => {
  const { value } = event.target;

  searchValue = setSearchValue(() => value);

  console.log(searchValue);
});
