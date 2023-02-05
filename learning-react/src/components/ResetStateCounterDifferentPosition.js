import { useState } from 'react';

// - When you render a different component in the same position, it resets the state of its entire subtree.

// -  You should not nest component function definitions.

export default function ResetStateCounterDifferentPosition() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div style={{ padding: '0.5rem 5rem' }}>
    <h1>👉 Reset State in Different Position</h1>
      {isPaused ? (
        <p>See you later!</p> 
      ) : (
        <Counter /> 
      )}
      <label>
        <input
          type="checkbox"
          checked={isPaused}
          onChange={e => {
            setIsPaused(e.target.checked)
          }}
        />
        Take a break
      </label>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
