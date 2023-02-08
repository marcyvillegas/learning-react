import { useState, useRef } from 'react';

// Comoponent will remember some information, but don’t want that information to trigger new renders
// Refs are useful when you work with external systems or browser APIs.
// If much of your application logic and data flow relies on refs, you might want to rethink your approach.

//  The most common use case for a ref is to access a DOM element.

export default function UseRefCounter() {

    return (
        <div style={{ padding: '0.5rem 5rem' }}>
            <h1>👉 Referencing Values with Refs</h1>
            <UseRefComponent />
            <UseStateCounter />
        </div>
    );
}

function UseStateCounter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            You clicked {count} times using useState
        </button>
    );
}


function UseRefComponent() {
  let countRef = useRef(0);

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
  }

  return (
    <button onClick={handleClick}>
      You clicked {countRef.current} times using useRef
    </button>
  );
}