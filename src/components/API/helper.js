const baseAPI = 'https://pokeapi.co/api/v2/';

export const pokemonByCategory = () => {
  try {
    let categoryId = 1;
    const categoryArray = [];
    while (categoryId < 19) {
      fetch(`${baseAPI}type/${categoryId}`)
        .then((response) => response.json())
        .then((result) => categoryArray.push(result.pokemon));
      categoryId += 1;
    }
    return categoryArray;
  } catch (error) {
    return null;
  }
};

export const allPokemon = async () => {
  try {
    const response = await fetch(`${baseAPI}pokemon?offset=0&limit=20`);
    const newDataJson = await response.json();
    const result = newDataJson.results;
    return result;
  } catch (error) {
    return null;
  }
};

export const fetchPokeData = async (url) => {
  try {
    const response = await fetch(url);
    const newData = await response.json();
    return newData;
  } catch (error) {
    return null;
  }
};

export const imageUrl = (id) => `https://raw.githubusercontent.com/kumilachew-g/pokemon-images/master/all/${id}.png`;
