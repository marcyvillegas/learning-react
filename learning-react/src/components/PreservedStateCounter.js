import { useState } from 'react';

// - The Counter component only changed its styling.
// - It’s the same component at the same position, so from React’s perspective, it’s the same counter and the state will not be destroyed.

// - Remember that it’s the position in the UI tree—not in the JSX markup—that matters to React.

export default function PreservedStateCounter() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div style={{ padding: '0.5rem 5rem' }}>
    <h1>👉 Preserve State</h1>
      {isFancy ? (
        <Counter isFancy={true} /> 
      ) : (
        <Counter isFancy={false} /> 
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
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
