export const initialState = {
  loading: false,
  gallery: [],
  isOpen: false,
  page: 1,
  per_page: 12,
  q: '',
  currentImg: null,
  error: null,
  maxImg: 0,
};

export const imageReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
