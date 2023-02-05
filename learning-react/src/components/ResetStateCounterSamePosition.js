import { useState } from 'react';

// - Option 1: Use keys as they distinguish different components
// - Option 2: Conditional rendering using &&

export default function ResetStateCounterSamePosition() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div style={{ padding: '0.5rem 5rem' }}>
    <h1>👉 Reset State in Same Position</h1>
      {isPlayerA ? (
        <Counter key="Taylor" person="Taylor" />
      ) : (
        <Counter key="Sarah" person="Sarah" />
      )}
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}

function Counter({ person }) {
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
      <h1>{person}'s score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}