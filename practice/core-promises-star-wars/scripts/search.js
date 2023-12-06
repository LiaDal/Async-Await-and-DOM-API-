const searchBtn = document.getElementById("byQueryBtn");
const searchIDBtn = document.getElementById("byIdBtn");
const contentField = document.getElementById("content");
const searchInput = document.getElementById("searchInput");
const resultBlock = document.getElementById("result-container")
const loader = document.getElementById("spinner")
const selectName = document.getElementById("select-name");
const selectId = document.getElementById("select-name");


selectName.addEventListener('change', (e) => {
  return selectName.options[selectName.selectedIndex].value;
})

selectId.addEventListener('change', (e) => {
  return selectId.options[selectId.selectedIndex].value;
})

  searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let searchText = searchInput.value;
  let titleOutput = document.getElementById("message-title")
  loader.style.visibility = 'visible';

  if (searchText.trim() === '') {
    contentField.innerHTML = '';
      return;
  }

  const searchCharacter = async () => {
    const res = await fetch(
      `https://swapi.dev/api/people/?search=${searchText}`
    );
    const data = await res.json();
    const url = data.results.map((result) => result.homeworld);
    const planet = await fetch(url);
    const planetName = await planet.json();
    const homeworld = planetName.name

    loader.style.visibility = 'hidden';
    resultBlock.style.visibility = 'visible';
    titleOutput.innerHTML = searchText;
    contentField.innerHTML = data.results.map((result) => `
            Name: ${result.name},<br>
            Height: ${result.height},<br>
            Mass: ${result.mass},<br>
            Haircolor: ${result.hair_color},<br>
            Skincolor: ${result.skin_color},<br>
            Eyecolor: ${result.eye_color},<br>
            Birthyear: ${result.birth_year},<br>
            Gender: ${result.gender},<br>
            Homeworld: ${homeworld},<br>
            Films: ${result.films.join("<br>")},<br>
            Species: ${result.species},<br>
            Vehicles: ${result.vehicles},<br>
            Starships: ${result.starships},<br>
            Created: ${result.created},<br>
            Edited: ${result.edited},<br>
            Url: ${result.url},<br>
            `);
  };

  const searchPlanets = async () => {
    const res = await fetch(
      `https://swapi.dev/api/planets/?search=${searchText}`
    );
    const data = await res.json();
    loader.style.visibility = 'hidden';
    resultBlock.style.visibility = 'visible';
    titleOutput.innerHTML = searchText;
    contentField.innerHTML = data.results.map((result) => `
            Name: ${result.name},<br>
            Rotation_period: ${result.rotation_period},<br>
            Orbital_period: ${result.orbital_period},<br>
            Diameter: ${result.diameter},<br>
            Climate: ${result.climate},<br>
            Gravity: ${result.gravity},<br>
            Terrain: ${result.terrain},<br>
            Surface_water: ${result.surface_water},<br>
            Population: ${result.population},<br>
            Residents: ${result.residents.join("<br>")},<br>
            Films: ${result.films.join("<br>")},<br>
            Created: ${result.created},<br>
            Edited: ${result.edited},<br>
            Url: ${result.url},<br>
            `);
  };

  const searchSpecies = async () => {
    const res = await fetch(
      `https://swapi.dev/api/species/?search=${searchText}`
    );
    const data = await res.json();
    const url = data.results.map((result) => result.homeworld);
    const planet = await fetch(url);
    const planetName = await planet.json();
    const homeworld = planetName.name

    loader.style.visibility = 'hidden';
    resultBlock.style.visibility = 'visible';
    titleOutput.innerHTML = searchText;
    contentField.innerHTML = data.results.map((result) => `
            Name: ${result.name},<br>
            Classification: ${result.classification},<br>
            Designation: ${result.designation},<br>
            Average_height: ${result.average_height},<br>
            Skin_colors: ${result.skin_colors},<br>
            Hair_colors: ${result.hair_colors},<br>
            Eye_colors: ${result.eye_colors},<br>
            Average_lifespan: ${result.average_lifespan},<br>
            Homeworld: ${homeworld},<br>
            Language: ${result.language},<br>
            People: ${result.people.join("<br>")},<br>
            Films: ${result.films.join("<br>")},<br>
            Created: ${result.created},<br>
            Edited: ${result.edited},<br>
            Url: ${result.url},<br>
            `);
  };

  if(selectName.options[selectName.selectedIndex].value === 'people') {
    searchCharacter();
  } else if(selectName.options[selectName.selectedIndex].value === 'planets'){
    searchPlanets();
  } else {
    searchSpecies();
  }
  });
  
 
