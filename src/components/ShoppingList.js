import React from 'react';
import { nanoid } from 'nanoid'
import ShoppingListItem from './ShoppingListItem';
import ShoppingListControls from './ShoppingListControls';

function useStateWithLocalStorage(localStorageKey) {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );
 
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);
 
  return [value, setValue];
};

function ShoppingList() {
  const [items, setItems] = useStateWithLocalStorage('shoppinglist-items');

  const addItem = (name) => {
    const item = { id: 'item-' + nanoid(), name: name, checked: false }
    setItems([...items, item]);
    console.log("added item");
    console.log(item);
  }

  const clearItems = () => {
    setItems([]);
    console.log("cleared items");
  }

  const itemChecked = (id) => {
    console.log("checking item " + id)
    const updatedItems = items.map(item => {
      if (id === item.id) {
        return {...item, checked: !item.checked}
      }
      return item;
    });
    setItems(updatedItems);
  }

  return (
    <div className="shoppinglist">
      <h1 className="shoppinglist-header">Shopping List</h1>
      { items.length ?
          <ul>
          {
            items.map((item) => (
              <ShoppingListItem
                id={item.id}
                key={item.id}
                name={item.name}
                checked={item.checked}
                itemChecked={itemChecked}
              />
            ))
          }
          </ul>
        : <p className="shoppinglist-empty">List is empty...</p>
      }
      <ShoppingListControls addItem={addItem} clearItems={clearItems} />
    </div>
  );
}

export default ShoppingList;
