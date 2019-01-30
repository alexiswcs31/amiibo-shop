import {
  FETCH_FIGURES_REQUEST,
  FETCH_FIGURES_SUCCESS,
  FETCH_FIGURES_ERROR,
  FETCH_SINGLE_FIGURE_REQUEST,
  FETCH_SINGLE_FIGURE_SUCCESS,
  FETCH_SINGLE_FIGURE_ERROR,
  ADD_TO_BOX,
  DELETE_FROM_BOX
} from '../constants/actionTypes';

// All figures

export const fetchFiguresRequest = () => ({
  type: FETCH_FIGURES_REQUEST
})

export const fetchFiguresSuccess = (figures) => ({
  type: FETCH_FIGURES_SUCCESS,
  figures
})

export const fetchFiguresError = (error) => ({
  type: FETCH_FIGURES_ERROR,
  error
})

// Only one figure

export const fetchSingleFigureRequest = () => ({
  type: FETCH_SINGLE_FIGURE_REQUEST
});

export const fetchSingleFigureSuccess = (figure) => ({
  type: FETCH_SINGLE_FIGURE_SUCCESS,
  figure
});

export const fetchSingleFigureError = (error) => ({
  type: FETCH_SINGLE_FIGURE_ERROR,
  error
});

// Add into the box

export const addToBox = (id, quantityNeeded) => ({
  type: ADD_TO_BOX,
  id,
  quantityNeeded
})

// Delete from the box

export const deleteFromBox = (id, quantityNeeded) => ({
  type: DELETE_FROM_BOX,
  id,
  quantityNeeded
})
