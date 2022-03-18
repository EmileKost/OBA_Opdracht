const boekContent = document.getElementById('sectie2');
const sectionContent = document.getElementById('sectie');
const feedbackContentBoek = document.getElementById('feedbackContentBoek');
feedbackContentBoek.textContent = 'De content wordt geladen...';
const errorMeldingBoek = document.getElementById('errorMeldingBoek');
errorMeldingBoek.textContent = '';
const errorMelding = document.getElementById("errorMelding");
errorMelding.textContent = 'Kan geen content worden geladen';
const loader = document.getElementById('loader1');
const loader2 = document.getElementById('loader-2')


//Data en renderen voor basiskennis

export function renderData(data) {
      const results = data.results;
      console.dir(results);
      results.forEach((item, i) => {
          const html = `
                  <article>
                    <h3>${item.titles[0]}</h3>
                    <img src="${
                      item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                    }">
                    <p id="korte-samenvatting">${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                  </article>
                `;
          sectionContent.insertAdjacentHTML('beforeend', html);
        }
        );
        feedbackContent.textContent = '';
        loader.classList.remove('loader');
        errorMelding.textContent = '';
  }


export function renderBookData(Bookdata) {
    const results = Bookdata.results;
    console.dir(results);
    results.forEach((item, i) => {
        const bookContent = `
                <article>
                  <h3>${item.titles[0]}</h3>
                  <img src="${
                    item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
                  }">
                </article>
              `;
        boekContent.insertAdjacentHTML('beforeend', bookContent);
      }
      
      );
      feedbackContentBoek.textContent = '';
      loader2.classList.remove('loader2');
}