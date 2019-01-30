import {
  ADD_TO_BOX,
  DELETE_FROM_BOX
} from '../constants/actionTypes';

const initialState = {
  box: [],
  total: 0
};

const box = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BOX: {
      const { id, quantityNeeded } = action;
      const box = [
        ...state.box,
        {
          id,
          quantityNeeded
        }
      ]
      return {
        ...state,
        box
      }
    }

    case DELETE_FROM_BOX: {
      const box = state.box.filter(figure => figure.id !== action.id);
      return {
        box,
        total: state.total - action.price
      };
    }

    default:
      return state;
  }
};

export default box;
