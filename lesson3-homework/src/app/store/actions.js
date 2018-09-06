export const addItemToList = (newItem) => {
  this.setState(prevState => {
    prevState.taskList.push(newItem);
    this.saveToLocalStorage();
    return { prevState };
  });
};

export const delItemFromList = (delItem) => {
  this.setState(prevState => {
    const curItem = prevState.taskList.find(
      item => item.name === delItem.name
    );

    let result = prevState.taskList;
    if (curItem) {
      result = prevState.taskList.splice(
        prevState.taskList.indexOf(curItem),
        1
      );
    }
    this.saveToLocalStorage();
    return { result };
  });
};

export const filterItems = (filterValue) => {
  let filteredTaskList = this.state.taskList;
  if (filterValue) {
    filteredTaskList = this.state.taskList.filter(
      item => item.group === filterValue.value
    );
  }
  this.setState({
    modifiedList: filteredTaskList
  });
};

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
};

export const saveToLocalStorage = () => {
  localStorage.appListData = JSON.stringify(this.props.taskList);
};
