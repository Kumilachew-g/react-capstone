import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { fetchPokeData } from '../API/helper';

const Pokemon = ({ location }) => {
  const [data, setData] = useState(null);

  let name;
  let pokeDexUrl;

  if (location.state === undefined) {
    const { pokeName } = useParams();
    name = pokeName;
    pokeDexUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;
  } else {
    name = location.state.poke;
    pokeDexUrl = location.state.url;
  }

  useEffect(async () => {
    const newData = await fetchPokeData(pokeDexUrl);
    setData(newData);
  }, []);

  if (data) {
    return (
      <span>
        {/* NavBar area */}
        <div>
          <div>
            <h1>{name}</h1>
            {/* Image Area */}
            <div>
              <div>{`${data.height * 10}cm`}</div>
            </div>

            <div>
              <div>{`${data.weight / 10}kg`}</div>
            </div>

            <div>
              <div>{`${data.id}`}</div>
            </div>
          </div>
        </div>
      </span>
    );
  }
  return <p>Fetching Data...</p>;
};

Pokemon.propTypes = {
  location: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Pokemon;
