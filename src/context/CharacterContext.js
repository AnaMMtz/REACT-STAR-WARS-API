import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { api, filmsApi } from 'api/api';

export const CharacterContext = createContext();

const CharacterProvider = (props) => {
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const resp = await axios.get(api);
      setCharacters(resp.data.results);
    };
    getCharacters();
  }, []);

  useEffect(() => {
    const getFilms = async () => {
      const resp = await axios.get(filmsApi);
      setFilms(resp.data.results);
    };
    getFilms();
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        setCharacters,
        films,
        setFilms,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
