// SET_TEXT_FILTER_TYPE
export const setTextFilterType = filterType => ({
  type: 'SET_TEXT_FILTER_TYPE',
  filterType,
});
// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});
// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
// SORT_BY_VIEWS
export const sortByViews = () => ({
  type: 'SORT_BY_VIEWS',
});
