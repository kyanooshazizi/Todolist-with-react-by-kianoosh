export const saveTodoItemsToLocalStorage = (storageKey, storageValue) => {
    localStorage.setItem(storageKey, JSON.stringify(storageValue))
};


export const getToDoItemsFromLocalStorage = (storageKey) => {
    const storageValue = localStorage.getItem(storageKey);
  
    let todoItems = [];
  
    try {
      const storageValueJSON = JSON.parse(storageValue);
  
      if (Array.isArray(storageValueJSON)) {
        todoItems = storageValueJSON;
      }
    } catch(e) {
      todoItems = [];
    }
    
    return todoItems;
};