import {
  callSwapiPlanets,
  callPrevPagePlanets,
  callNextPagePlanets,
} from "./modules/service.js";

const input = document.querySelector("#search_inp");
const planetsSection = document.querySelector("#planets_section_ul");
let inputValue = "";

const prevBtnPlanets = document.querySelector("#prev_page");
const nextBtnPlanets = document.querySelector("#next_page");

prevBtnPlanets.addEventListener("click", () => {
  callPrevPagePlanets(planetsSection);
});

nextBtnPlanets.addEventListener("click", () => {
  callNextPagePlanets(planetsSection);
});

input.addEventListener("input", (e) => {
  inputValue = e.target.value;
  console.log(inputValue);
});

const searchForm = document.querySelector("#search_form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  callSwapiPlanets(inputValue, planetsSection);
});
