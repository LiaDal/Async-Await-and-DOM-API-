let searchBtn = document.getElementById("byQueryBtn");
let contentField = document.getElementById("content");
let searchInput = document.getElementById("searchInput");
let resultBlock = document.getElementById("result-container")
let loader = document.getElementById("spinner")


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
            edited: ${result.edited},<br>
            url: ${result.url},<br>
            `);
  };
  
  searchCharacter();
  });
  

