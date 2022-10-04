import { ADD_POKEMON } from '../actions/actions';

const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return action.payload;

    default:
      return state;
  }
};

export default pokemonReducer;
