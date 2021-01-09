import React from 'react';

function ShoppingListItem(props) {
  return (
    <li id={props.id} onClick={() => props.itemChecked(props.id)} className={props.checked ? 'shoppinglist-item shoppinglist-item-checked' : 'shoppinglist-item'}>
      <p>{props.name}</p>
    </li>
  );
}

export default ShoppingListItem;
