import { getData } from "./modules/data.js";
import { getBookData } from "./modules/data.js";
import { searchData } from "./modules/search.js";


getData();
getBookData();

//event listener zoekfunctie
document.getElementById('searchForm').addEventListener('submit', function(prevent){
  prevent.preventDefault();
  const searchBalk = document.querySelector('#searchBalk');
  let searchValue = searchBalk.value;
  function removeContent() {
    let boekContent = document.querySelectorAll('#sectie2 > article');
      for(var i = 0, l = boekContent.length; i < l; i++) {
        boekContent[i].remove();
      }
  }
  searchData(searchValue);
  removeContent();
})













