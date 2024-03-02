import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const breedsSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");

try {
  loader.classList.remove('hidden');
  breedsSelect.classList.add('hidden');
  error.classList.add('hidden');

  fetchBreeds()
    .then(data => renderSelect(data))
    .catch(showError);
} catch (error) {
  console.error(error);
}

function renderSelect(breeds) {
  const markup = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join("");
    breedsSelect.innerHTML = markup;
    breedsSelect.classList.remove('hidden');
    loader.classList.add('hidden');
};

breedsSelect.addEventListener('change', (event) => {
    breedsSelect.classList.add('hidden');
    loader.classList.remove('hidden');
    catInfo.classList.add('hidden');
  
    fetchCatByBreed(event.target.value)
      .then(data => renderCat(data[0]))
      .catch(showError);
});

function renderCat(catData) {
    catInfo.innerHTML = '';
    const { url } = catData;
    const { description, name, temperament } = catData.breeds[0];
    catInfo.insertAdjacentHTML("beforeend",
        `<div>
        <h2>${name}</h2>
        <img src="${url}" alt="${name}"/>
        <p>${description}</p>
        <p>${temperament}</p>
        </div>`);
    breedsSelect.classList.remove('hidden');
    catInfo.classList.remove('hidden');
    loader.classList.add('hidden');
};

function showError(errorMessage) {
  console.error(errorMessage);
  error.classList.remove('hidden');
  loader.classList.add('hidden');
};