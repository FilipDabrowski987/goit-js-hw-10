import { fetchBreeds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";

const fetchBreedsBtn = document.querySelector(".btn");
const breedsSelect = document.querySelector(".breed-select");

fetchBreedsBtn.addEventListener("click", () => {
    try {
    fetchBreeds().then(data => renderSelect(data));
  } catch (error) {
    console.log(error);
  }
});

function renderSelect(breeds) {
  const markup = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join("");
  breedsSelect.insertAdjacentHTML("beforeend", markup);
};

breedsSelect.addEventListener('change', (event) => {
    fetchCatByBreed(event.target.value).then(data => console.log(data));
});