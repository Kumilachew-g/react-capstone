import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import Navbar from '../containers/Nav';
import { artUrl, fetchPokeData } from '../API/helper';
import style from '../assets/styles/pokemon.module.css';

const Pokemon = ({ location }) => {
  const Capitalize = (str) => str.toUpperCase();
  const [data, setData] = useState(null);

  let name;
  let pokeUrl;

  if (location.state === undefined) {
    const { pokeName } = useParams();
    name = pokeName;
    pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;
  } else {
    name = location.state.poke;
    pokeUrl = location.state.url;
  }

  useEffect(async () => {
    const newData = await fetchPokeData(pokeUrl);
    setData(newData);
  }, []);

  if (data) {
    return (
      <span>
        <Navbar />
        <div className={style.flex}>
          <div className={style.row}>
            <div className={style.leftColumn}>
              <div className={style.card}>
                <h2>{Capitalize(name)}</h2>
                <span className={style.flexTypes}>
                  <h5>{`Types: ${Capitalize(data.types[0].type.name)}`}</h5>
                </span>
                <img
                  src={artUrl(data.id)}
                  className={style.blogImg}
                  alt={name}
                />
                <p>{`Height: ${data.height * 10}cm`}</p>
                <p>{`Weight: ${data.weight / 10}kg`}</p>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
  return <p>Fetching Data...</p>;
};

Pokemon.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Pokemon;
