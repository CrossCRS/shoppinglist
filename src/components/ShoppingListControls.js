import React, {useState} from 'react';

function ShoppingListControls(props) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const addItem = () => {
    if (name) {
      props.addItem(name);
      setName("");
    }
  }
  const clearItems = () => {
    props.clearItems();
  }

  return (
    <div className='shoppinglist-controls'>
      <div className='shoppinglist-additem'>
        <input type='text' className='shoppinglist-input' id='shoppinglist-additem-input' placeholder='Your item name here...' 
          value={name} onChange={handleChange} onKeyDown={(e) => { if (e.key === 'Enter') { addItem() }}}/>
        <button type='button' className='shoppinglist-button' onClick={addItem}>Add</button>
      </div>
      <button type='button' className='shoppinglist-button' onClick={clearItems}>Clear list</button>
    </div>
  );
}

export default ShoppingListControls;
