
// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'createdAt',
  filterType: 'byTitle',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
  case 'SET_TEXT_FILTER':
    return { ...state, text: action.text };
  case 'SET_TEXT_FILTER_TYPE':
    return { ...state, filterType: action.filterType };
  case 'SORT_BY_DATE':
    return { ...state, sortBy: 'createdAt' };
  case 'SORT_BY_VIEWS':
    return { ...state, sortBy: 'views' };
  default:
    return state;
  }
};
