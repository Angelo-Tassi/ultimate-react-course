import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleCheckItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        handleCheckItems={handleCheckItems}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🌴</h1>;
}

function Form({ addItems }) {
  // sets state and props for the input field, then disables html default
  const [description, setDescription] = useState('');
  function handleSubmit(e) {
    // setDescription(e.target.value);
    // console.log(e.target.value);
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    addItems(newItem);

    setDescription('');
    setQuantity(1);
  }
  // sets state and props for the select dropdown, then disables html default
  const [quantity, setQuantity] = useState(1);
  function handleSelect(e) {
    setQuantity(Number(e.target.value));
    // console.log(e.target.value);
    // e.preventDefault();
  }
  // creates a new array of 20 items
  function createArray() {
    return Array.from({ length: 20 }, (_, i) => i + 1);
  }

  return (
    // onSubmit method works on both the input field and button in the entire form, in this case is used at the beginning with the purpose of disabling the default html refresh behavior when we interact with the forms.
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>🚢 What do tou need for your trip ? ✈</h3>
      {/* the event for select dropdown is triggered by onChange */}
      <select value={quantity} onChange={handleSelect}>
        {/* loops over the previously created array with map method */}
        {createArray().map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        // {/* the event for the input field is triggered by onChange */}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItems, handleCheckItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            handleCheckItems={handleCheckItems}
            onDeleteItems={onDeleteItems}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, handleCheckItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleCheckItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {`${item.quantity} ${item.description}`}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>
        {item.packed ? '✅' : '❌'}
      </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list, and you already packed x(x%)</em>
    </footer>
  );
}
