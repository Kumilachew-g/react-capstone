import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../assets/styles/pokemonarea.module.css';
import { imageUrl } from '../API/helper';

const PokemonListing = ({ poke, url, id }) => {
  function capitalizeLetters(string) {
    return string.toUpperCase();
  }

  return (
    <div className={style.column}>
      <Link
        className={style.text}
        to={{ pathname: `/pokemon/${poke}`, state: { poke, url, id } }}
      >
        {capitalizeLetters(poke)}
      </Link>
      <img alt={poke} src={imageUrl(id)} />
    </div>
  );
};

PokemonListing.propTypes = {
  poke: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string,
};

PokemonListing.defaultProps = {
  id: PropTypes.string,
};

export default PokemonListing;
