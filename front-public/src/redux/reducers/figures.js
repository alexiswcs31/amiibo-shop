import {
  FETCH_FIGURES_REQUEST,
  FETCH_FIGURES_SUCCESS,
  FETCH_FIGURES_ERROR,
  FETCH_SINGLE_FIGURE_REQUEST,
  FETCH_SINGLE_FIGURE_SUCCESS,
  FETCH_SINGLE_FIGURE_ERROR
} from '../constants/actionTypes';

const initialState = {
  list: [],
  loading: false,
  failure: null,
  figure: {}
}

const figures = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FIGURES_REQUEST: {
      const { list } = action;
      return {
        ...state,
        list,
        loading: true
      }
    }

    case FETCH_FIGURES_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: action.figures
      }
    }

    case FETCH_FIGURES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }

    case FETCH_SINGLE_FIGURE_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case FETCH_SINGLE_FIGURE_SUCCESS: {
      return {
        ...state,
        loading: false,
        figure: action.figure
      }
    }

    case FETCH_SINGLE_FIGURE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }

    default:
      return state;
  }
};

export default figures;
