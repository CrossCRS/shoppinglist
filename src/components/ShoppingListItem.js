import React from 'react';

function ShoppingListItem(props) {
  return (
    <li className="shoppinglist-item-container">
      <div id={props.id} onClick={() => props.toggleCheckedItem(props.id)} className={props.checked ? 'shoppinglist-item shoppinglist-item-checked' : 'shoppinglist-item'}>
        <p>{props.name}</p>
      </div>
      <button onClick={() => props.deleteItem(props.id)} className="shoppinglist-button iconbutton"><i class="fas fa-trash fa-xs fa-fw"></i></button>
    </li>
  );
}

export default ShoppingListItem;
