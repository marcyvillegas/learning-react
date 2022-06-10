import Joke from './Joke'
import { jokesData } from '../lib/jokesData'

export default function JokeContainer() {

    let jokeCards = jokesData.map((item) => {
        return (
            <Joke key={item.id} {...item} />
        )
    })

    return (
        <div style={{ marginTop: '1rem',padding: '1rem 5rem'}}>
            <h1 style={{margin: '0'}}>Jokes (Conditional rendering)</h1>
            <div style={{ display: 'flex', gap: '2rem' }}>
                {jokeCards}
            </div>
        </div>
    );
}