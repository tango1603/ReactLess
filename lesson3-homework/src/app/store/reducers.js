
import { MOCKLIST, ACTION_ADD_ITEM_TO_LIST, ACTION_DEL_ITEM_FROM_LIST, ACTION_FILTER_ITEMST, ACTION_SORT_LIST } from '../constants/constants';

const initialDataTaskList = () => {
  const list = JSON.parse(localStorage.appListData || null);
  return list || MOCKLIST;
};

const initialState = {
  taskList: initialDataTaskList(),
  modifiedList: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_ADD_ITEM_TO_LIST:
    return { ...state,
      firstName: action.payload
    };

  case ACTION_DEL_ITEM_FROM_LIST:
    return { ...state,
      lastName: action.payload
    };

  case ACTION_FILTER_ITEMST:
    return { ...state,
      firstName: action.payload
    };

  case ACTION_SORT_LIST:
    return { ...state,
      lastName: action.payload
    };

  default:
    break;
  }
  return state;
};
