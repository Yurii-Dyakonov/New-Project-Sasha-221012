import {
  callSwapiStarShips,
  callPrevPageStarShips,
  callNextPageStarShips,
} from "./modules/service.js";

const input = document.querySelector("#search_inp");
const starShipsSection = document.querySelector("#starships_section_ul");
let inputValue = "";

const prevBtnStarShips = document.querySelector("#prev_page");
const nextBtnStarShips = document.querySelector("#next_page");

prevBtnStarShips.addEventListener("click", () => {
  callPrevPageStarShips(starShipsSection);
});

nextBtnStarShips.addEventListener("click", () => {
  callNextPageStarShips(starShipsSection);
});

input.addEventListener("input", (e) => {
  inputValue = e.target.value;
  console.log(inputValue);
});

const searchForm = document.querySelector("#search_form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  callSwapiStarShips(inputValue, starShipsSection);
});
