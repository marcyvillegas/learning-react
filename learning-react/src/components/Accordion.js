import { useState } from 'react';

// >> Sharing State Between Components
// - shows "lifting state up" wherein the closest common parent is the source of truth
// - the child changes the parent's state by passing down the parent's event handler to the child

// - Components with local states are called "uncontrolled components." Parent components cannot influence the behaviour of the child component.
// - Component is “controlled” when the important information in it is driven by props rather than its own local state. The child component below is driven by props, not by having its own local state.
// - When writing a component, consider which information in it should be controlled (via props), and which information should be uncontrolled (via state). But you can always change your mind and refactor later.

// - For each unique piece of state, you will choose the component that “owns” it. This principle is also known as having a “single source of truth”.
// - Instead of duplicating shared state between components, you will lift it up to their common shared parent, and pass it down to the children that need it.

// Parent component
export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{ padding: '0 5rem' }}>
      <h1>👉 Sharing State Between Components</h1>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
}

// Child component
function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}