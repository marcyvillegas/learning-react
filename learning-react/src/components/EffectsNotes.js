import React from 'react';

// Read the docs for more details

// >> Synchronizing with Effects
//  Sending a message in the chat is an event because it is directly caused by the user clicking a specific button. However, setting up a server connection is an Effect because it needs to happen regardless of which interaction caused the component to appear.

// Effects run at the end of the rendering process after the screen updates.

// How to write an Effect 
// 1. Declare an Effect. By default, your Effect will run after every render.
// 2. Specify the Effect dependencies.
// 3. Add cleanup if needed by returning a clean up function.

// In React, rendering should be a pure calculation of JSX and should not contain side effects like modifying the DOM.

// By wrapping the DOM update in an Effect, you let React update the screen first. Then your Effect runs.

// --------------------------------
// >> You Might Not Need an Effect
// If there is no external system involved (for example, if you want to update a component’s state when some props or state change), you shouldn’t need an Effect.



function EffectsNotes() {
  return (
    <div style={{ padding: '0.5rem 5rem' }}>
    <h1>👉 Synchronizing with Effects</h1>
    <p>Check comments</p>
    </div>
);
}

export default EffectsNotes;
