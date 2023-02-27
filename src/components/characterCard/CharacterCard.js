import React, { useContext, useEffect, useState } from 'react';
import { CharacterContext } from 'context/CharacterContext';

const CharacterCard = ({ character }) => {
  const { characters, films } = useContext(CharacterContext);

  const [film, setFilm] = useState([]);

  let title = [];
  useEffect(() => {
    const getFilmsData = () => {
      characters.map((item) => {
        if (item.name === character) {
          const filmsArr = item.films;
          for (let i = 0; i < filmsArr.length; i++) {
            console.log(filmsArr[i]);
            films.map((item) => {
              let urlFilm = item.url;
              if (urlFilm === filmsArr[i]) {
                console.log('titulo', item.title);
                title.push(item.title);
              }
            });
          }
        }
      });
      setFilm(title);
    };
    getFilmsData();
  }, [character]);

  return (
    <div>
      <p>{character}</p>
      <ul>
        {film.map((item) => (
          <li style={{ listStyle: 'none' }} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterCard;
