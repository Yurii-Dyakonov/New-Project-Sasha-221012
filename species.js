import {
  callSwapiSpecies,
  callPrevPageSpecies,
  callNextPageSpecies,
} from "./modules/service.js";

const input = document.querySelector("#search_inp");
const speciesSection = document.querySelector("#species_section_ul");
let inputValue = "";

const prevBtnSpecies = document.querySelector("#prev_page");
const nextBtnSpecies = document.querySelector("#next_page");

prevBtnSpecies.addEventListener("click", () => {
  callPrevPageSpecies(speciesSection);
});

nextBtnSpecies.addEventListener("click", () => {
  callNextPageSpecies(speciesSection);
});

input.addEventListener("input", (e) => {
  inputValue = e.target.value;
  console.log(inputValue);
});

const searchForm = document.querySelector("#search_form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  callSwapiSpecies(inputValue, speciesSection);
});
