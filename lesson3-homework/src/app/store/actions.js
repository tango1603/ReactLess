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


/*
export const sortList = (sortType, sortField) => {
  console.log('sortList', sortType, 'sortField', sortField);

  const sortedTaskList = this.state.taskList;
  sortedTaskList.sort((a, b) => {
    if (sortType === 'asc') {
      if (a[sortField] > b[sortField]) {
        return 1;
      }
      if (a[sortField] < b[sortField]) {
        return -1;
      }
    }
    if (sortType === 'desc') {
      if (a[sortField] > b[sortField]) {
        return -1;
      }
      if (a[sortField] < b[sortField]) {
        return 1;
      }
    }

    // a должно быть равным b
    return 0;
  });

  this.setState({
    modifiedList: sortedTaskList
  });

  console.log(sortedTaskList);
}; */
