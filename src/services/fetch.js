/* eslint-disable max-len */
export const fetchCharacters = async() => {
  const response = await fetch('https://xfiles-api.herokuapp.com/api/v1/characters?perPage=39&page=1');
  const json = await response.json();

  if(!response.ok) throw 'Bad Request';

  const mappedCharacters = json.results.map(character => ({
    name: character.name ? character.name : 'Unavailable',
    status: character.status ? character.status : 'Unavailable',
    image: character.image ? character.image : 'Unavailable'
  }));
  return await mappedCharacters;
};
