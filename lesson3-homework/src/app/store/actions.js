import { ACTION_ADD_ITEM_TO_LIST, ACTION_DEL_ITEM_FROM_LIST, ACTION_FILTER_ITEMST, ACTION_SORT_LIST } from '../constants/constants';

export const addItemToList = (newItem) => {
  return {
    type: ACTION_ADD_ITEM_TO_LIST,
    payload: newItem
  };
};

export const delItemFromList = (delItem) => {
  return {
    type: ACTION_DEL_ITEM_FROM_LIST,
    payload: delItem
  };
};

export const filterItems = (filterValue) => {
  return {
    type: ACTION_FILTER_ITEMST,
    payload: filterValue
  };
};

export const sortList = (sortType, sortField) => {
  return {
    type: ACTION_SORT_LIST,
    payload: {sortType, sortField}
  };
};
