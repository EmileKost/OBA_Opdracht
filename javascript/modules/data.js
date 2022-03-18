import { renderData } from "./render.js";
import { renderBookData } from "./render.js";

 const cors = 'https://cors-anywhere.herokuapp.com/';
 const endpoint = 'https://zoeken.oba.nl/api/v1/search/?pagesize=6&q=subject%3A"Startende+ondernemingen"';
 let query = 'ondernemerschap';
 const key = '166270b1475823ac569dab2a55e8aa3a';
 const secret = 'd7519ea81ad4e06ab5e5dac46ddeb63a';
 const detail = 'Default';
 const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

let feedbackContent = document.getElementById('feedbackContent');
feedbackContent.textContent = 'De content is aan het laden...';
let errorContent = document.getElementById('errorMelding')
errorContent.textContent = '';
const loader = document.getElementById('loader1');
const loader2 = document.getElementById('loader-2');

export const config = {
  Authorization: `Bearer ${secret}`
};

export function getData() {
fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    renderData(data);
    const skeletonState = document.getElementById('skeletonStructure');
    skeletonState.remove();
  })
  .catch(err => {
    console.log(err);
    errorContent.textContent = 'Er kan geen content worden ingeladen, check jouw internet verbinding...';
    feedbackContent.textContent = '';
    loader.classList.remove('loader');
  })
}

// //Javascript voor boekenlijst ondernemerschap
 const endpointBook = 'https://zoeken.oba.nl/api/v1/search/?pagesize=15&q=subject%3A"Ondernemen"';
 const queryBook = 'boek';
 const detailBook = 'Default';
 const urlBook = `${cors}${endpointBook}${queryBook}&authorization=${key}&detaillevel=${detailBook}&output=json`;


const feedbackContentBoek = document.getElementById('feedbackContentBoek');
feedbackContentBoek.textContent = 'De content wordt geladen...';
const errorMeldingBoek = document.getElementById('errorMeldingBoek');
errorMeldingBoek.textContent = '';

export function getBookData() {
fetch(urlBook, config)
  .then(response => {
    return response.json();
  })
  .then(Bookdata => {
    renderBookData(Bookdata);
    const skeletonState2 = document.getElementById("skeletonStructure2");
    skeletonState2.remove();
  })
  .catch(err => {
    console.log(err);
    feedbackContentBoek.textContent = '';
    errorMeldingBoek.textContent = 'Er kan geen content worden ingeladen, check jouw internet verbinding...';
    loader2.classList.remove('loader2');
  });
}

