import {
  callSwapiFilms,
  callPrevPage,
  callNextPage,
} from "./modules/service.js";

const input = document.querySelector("#search_inp");
const filmsSection = document.querySelector("#films_section_ul");
let inputValue = "";

const prevBtn = document.querySelector("#prev_page");
const nextBtn = document.querySelector("#next_page");

prevBtn.addEventListener("click", () => {
  callPrevPage(filmsSection);
});

nextBtn.addEventListener("click", () => {
  callPrevPage(filmsSection);
});

input.addEventListener("input", (e) => {
  inputValue = e.target.value;
  console.log(inputValue);
});

const searchForm = document.querySelector("#search_form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  callSwapiFilms(inputValue, filmsSection);
});
