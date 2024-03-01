//axios.defaults.headers.common["x-api-key"] = 'api_key=live_oLlF3i9CosWMP9pQL5psZHR7F8jMmBHEDuHoIiQwiJ8RAR3MtiVmqBGOn2oFUQ3y';

import axios from "axios";

const fetchBreedsBtn = document.querySelector(".btn");

fetchBreedsBtn.addEventListener("click", async () => {
  try {
    const breeds = await fetchBreeds();
    console.log(breeds)
  } catch (error) {
    console.log(error);
  }
});

async function fetchBreeds() {
 const response = await axios.get(
   `https://api.thecatapi.com/v1/breeds`);
  return response.data;
}

function renderBreeds(breeds) {
  const markup = breeds
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  breedList.insertAdjacentHTML("beforeend", markup);
}