import { useRef } from 'react';

// You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it.

export default function RefDOM() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div style={{ padding: '0.5rem 5rem' }}>
      <h1>👉 Manipulating the DOM with Refs & You Might Not Need an Effect</h1>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </div>
  );
}
