import React, { useContext, useState } from 'react';
import { CharacterContext } from 'context/CharacterContext';
import CharacterCard from 'components/characterCard';

export const SelectCharacter = () => {
  const { characters, films } = useContext(CharacterContext);
  const [character, setCharacter] = useState([]);
  const [film, setFilm] = useState([]);

  const getFilmsData = () => {
    characters.map((item) => {
      if (item.name) {
        const filmsArr = item.films;
        for (let i = 0; i < filmsArr.length; i++) {
          if (filmsArr[i]) {
            for (let j = 0; j < films.length; j++) {
              setFilm(films[i]);
            }
          }
        }
      }
    });
  };

  const getCharactersData = (e) => {
    setCharacter(e.target.value);

    return character;
  };

  return (
    <>
      <form onSubmit={getCharactersData}>
        <fieldset>
          <legend>Select the Character</legend>
        </fieldset>
        <br />
        <div>
          <select name="name" onChange={getCharactersData}>
            <option value="">-- Select Character --</option>
            {characters.map((character) => (
              <option key={character.name} value={character.name}>
                {character.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <button type="button">Search</button>
        </div>
      </form>
      <div>
        <CharacterCard character={character} film={film} />
      </div>
    </>
  );
};

export default SelectCharacter;
