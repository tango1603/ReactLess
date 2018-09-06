
import { MOCKLIST, ACTION_ADD_ITEM_TO_LIST, ACTION_DEL_ITEM_FROM_LIST, ACTION_FILTER_ITEMST, ACTION_SORT_LIST } from '../constants/constants';

const initialDataTaskList = () => {
  const list = JSON.parse(localStorage.appListData || null);
  return list || MOCKLIST;
};

const initialState = {
  taskList: initialDataTaskList()
};

const saveToLocalStorage = (taskList) => {
  localStorage.appListData = JSON.stringify(taskList);
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_ADD_ITEM_TO_LIST:
    console.log('ACTION_ADD_ITEM_TO_LIST', state, action);
    state.taskList.push(action.payload);
    saveToLocalStorage(state.taskList);
    return {
      ...state,
      taskList: [...state.taskList]
    };

  case ACTION_DEL_ITEM_FROM_LIST:
    console.log('ACTION_DEL_ITEM_FROM_LIST', state, action);
    const curItem = state.taskList.find(
      item => item.name === action.payload.name
    );

    if (curItem) {
      state.taskList.splice(state.taskList.findIndex(el => el.name === curItem.name), 1
      );
    }
    saveToLocalStorage(state.taskList);
    return { ...state, taskList: [...state.taskList]
    };

  case ACTION_FILTER_ITEMST:
    console.log('ACTION_FILTER_ITEMST', state, action);
    let filteredTaskList = initialState.taskList;
    if (action && action.payload) {
      filteredTaskList = initialState.taskList.filter(
        item => item.group === action.payload.value
      );
    }
    return { ...state, taskList: [...filteredTaskList]
    };

  case ACTION_SORT_LIST:
    console.log('ACTION_SORT_LIST', state, action);

    const {sortType, sortField} = action.payload;

    const sortedTaskList = state.taskList;
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
      return 0;
    });

    return { ...state, taskList: [...sortedTaskList]
    };

  default:
    break;
  }
  return state;
};
