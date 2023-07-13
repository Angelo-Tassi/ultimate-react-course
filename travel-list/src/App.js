import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: true },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
  { id: 4, description: 'Burrito', quantity: 2, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🌴</h1>;
}

function Form() {
  // sets state and props for the input field, then disables html default
  const [description, setDescription] = useState('');
  function handleSubmit(e) {
    // setDescription(e.target.value);
    // console.log(e.target.value);
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>{item.packed ? '✅' : '❌'}</button>
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
