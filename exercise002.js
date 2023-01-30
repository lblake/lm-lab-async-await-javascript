import fetch from 'node-fetch';

/* This API endpoint failed as I had not signed-up but use to check what happens if the endpoint failed*/
const recipe =
  'https://api.spoonacular.com/food/ingredients/9266/information?amount=1';

const lukeSkyWalker = 'http swapi.dev/api/people/1/';

const jsonTypicode = 'https://jsonplaceholder.typicode.com/todos/1';

async function fetchFailed() {
  const results = await fetch(recipe);
  const data = await results.json();
  console.log(data);
}
fetchFailed();

async function fetchStarWarsCharacter() {
  const results = await fetch('https://swapi.dev/api/people/1/');
  const data = await results.json();
  console.log(data);
}
fetchStarWarsCharacter();

const fetchData = async () => {
  try {
    let response = await fetch(jsonTypicode);
    let data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

fetchData(jsonTypicode);
