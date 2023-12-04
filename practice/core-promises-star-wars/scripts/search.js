// Методы, которые могут пригодиться:
// starWars.searchCharacters(query), 
// starWars.searchPlanets(query), 
// starWars.searchSpecies(query).
// starWars.getCharactersById(id), 
// starWars.getPlanetsById(id), 
// starWars.getSpeciesById(id)

// Тут ваш код.

let searchBtn = document.getElementById("byQueryBtn");
let contentField = document.getElementById("content");
let searchInput = document.getElementById("searchInput");
let resultBlock = document.getElementById("result-container")
let loader = document.getElementById("spinner")


  searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const searchText = searchInput.value;
  loader.style.visibility = 'visible';

  if (searchText.trim() === '') {
    contentField.innerHTML = '';
      return;
  }

  fetch(`https://swapi.dev/api/people/?search=${searchText}`)
      .then((response) => response.json())
      .then((results) => {
        loader.style.visibility = 'hidden';
        resultBlock.style.visibility = 'visible';
        contentField.innerHTML = results.results.map((result) => `
              Name: ${result.name},<br>
              Height: ${result.height},<br>
              Mass: ${result.mass},<br>
              Haircolor: ${result.hair_color},<br>
              Skincolor: ${result.skin_color},<br>
              Eyecolor: ${result.eye_color},<br>
              Birthyear: ${result.birth_year},<br>
              Gender: ${result.gender},<br>
              Homeworld: ${result.homeworld},<br>
              Films: ${result.films.join("<br>")},<br>
              Species: ${result.species},<br>
              Vehicles: ${result.vehicles},<br>
              Starships: ${result.starships},<br>
              Created: ${result.created},<br>
              edited: ${result.edited},<br>
              url: ${result.url},<br>
              `);
      });
});


