import { CATEGORY_POKEMON } from '../../components/actions/actions';

const catReducer = (state = [], action) => {
  switch (action.type) {
    case CATEGORY_POKEMON:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default catReducer;
