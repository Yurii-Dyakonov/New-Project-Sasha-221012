import {
  callStarWarsVehicles,
  callPrevPageVehicles,
  callNextPageVehicles,
} from "./modules/service.js";

const input = document.querySelector("#search_inp");
const vehiclesSection = document.querySelector("#vehicles_section_ul");
let inputValue = "";

const prevBtnVehicles = document.querySelector("#prev_page");
const nextBtnVehicles = document.querySelector("#next_page");

prevBtnVehicles.addEventListener("click", () => {
  callPrevPageVehicles(vehiclesSection);
});

nextBtnVehicles.addEventListener("click", () => {
  callNextPageVehicles(vehiclesSection);
});

input.addEventListener("input", (e) => {
  inputValue = e.target.value;
  console.log(inputValue);
});

const searchForm = document.querySelector("#search_form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  callStarWarsVehicles(inputValue, vehiclesSection);
});
