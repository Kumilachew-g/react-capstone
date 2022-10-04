import { ADD_POKEMON } from '../../components/actions/actions';

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return action.payload;

    default:
      return state;
  }
};

export default pokemonReducer;
