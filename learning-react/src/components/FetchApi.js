import { useState, useEffect } from 'react';

export default function FetchApi(){

    // user state
    const [userData, setUserData] = useState([])

    // count state
    const [count, setCount] = useState(1)

    // side effect
    useEffect(() => {
        
        console.log('EFFECT')
        
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
        .then(res => res.json())
        .then(data => setUserData(data.name))

    }, [count])

    return(
        <div style={{ padding: '0.5rem 5rem' }}>
            <h1>Fetching API (using useEffect)</h1>
            {userData}
            <p>num: {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    );
}