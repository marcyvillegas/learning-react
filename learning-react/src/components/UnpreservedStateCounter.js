import { useState } from 'react';

// - The moment you stop rendering the second counter, its state disappears completely. That’s because when React removes a component, it destroys its state.

export default function UnpreservedStateCounter() {
  const [showB, setShowB] = useState(true);
  return (
    <div style={{ padding: '0.5rem 5rem' }}>
    <h1>👉 Unpreserve State</h1>
      <Counter />
      {showB && <Counter />} 
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
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