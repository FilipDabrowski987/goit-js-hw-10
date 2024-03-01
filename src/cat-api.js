import axios from "axios";

export const fetchBreeds = () => { 
    axios.defaults.headers.common["x-api-key"] = 'live_oLlF3i9CosWMP9pQL5psZHR7F8jMmBHEDuHoIiQwiJ8RAR3MtiVmqBGOn2oFUQ3y';
    
    return axios
        .get(`https://api.thecatapi.com/v1/breeds`)
        .then(response => response.data);
};

export const fetchCatByBreed = breedId => {
    axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${event.target.value}`)
        .then(response => console.log(response.data));
};

