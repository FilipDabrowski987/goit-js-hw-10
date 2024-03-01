//axios.defaults.headers.common["x-api-key"] = 'live_oLlF3i9CosWMP9pQL5psZHR7F8jMmBHEDuHoIiQwiJ8RAR3MtiVmqBGOn2oFUQ3y';

import axios from "axios";

const fetchBreedsBtn = document.querySelector(".btn");
const breedsSelect = document.querySelector(".breed-select");

fetchBreedsBtn.addEventListener("click", () => {
    try {
    axios.defaults.headers.common["x-api-key"] = 'live_oLlF3i9CosWMP9pQL5psZHR7F8jMmBHEDuHoIiQwiJ8RAR3MtiVmqBGOn2oFUQ3y';
    
    axios
        .get(`https://api.thecatapi.com/v1/breeds`)
        .then(response => response.data)
        .then(data => renderSelect(data));
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
}