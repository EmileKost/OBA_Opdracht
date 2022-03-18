const searchContent = document.getElementById('sectie2');
const endpointSearch = 'https://zoeken.oba.nl/api/v1/search/?pagesize=6&q=';
const corsSearch = 'https://cors-anywhere.herokuapp.com/';
const key = 'd7519ea81ad4e06ab5e5dac46ddeb63a';
const detail = 'Default';

export function searchData(searchValue) {
    const searchInput = `${corsSearch}${endpointSearch}${searchValue}&authorization=${key}&detaillevel=${detail}&output=json`;
    console.log(searchInput);
    fetch(searchInput)
     .then(function(response){
       return response.json();
     }).then(function(searchInput){
         console.log('You searched ' + searchValue);
         renderSearchData(searchValue, searchInput);
     }).catch((error) => {
          console.log(error);
     })
  }
  
  export function renderSearchData(searchInput, searchValue) {
    const resultsSearch = searchValue.results;
    console.dir(resultsSearch);
    resultsSearch.forEach((item, i) => {
        const content = `
                <article>
                  <h3>${item.titles[0]}</h3>
                  <img src="${
                    item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                  }">
                </article>
              `;
        searchContent.insertAdjacentHTML('beforeend', content);
      }
    )
  }