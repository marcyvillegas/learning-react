import React, { useReducer } from 'react';

const initialState = {
    status: '',
    firstName: '',
    lastName: '',
    numberOfCharacters: 0
}

function reducer(state, action) {

    switch (action.type) {
        case 'TYPING_FIRSTNAME':
            return {
                ...state,
                status: 'Typing',
                firstName: action.payload.firstName,
                numberOfCharacters: action.payload.numberOfCharacters
            }

        case 'TYPING_LASTNAME':
            return {
                ...state,
                status: 'Typing',
                lastName: action.payload.firstName,
                numberOfCharacters: action.payload.numberOfCharacters
            }

        case 'SUBMITING':
            return {
                ...state,
                status: 'Submiting'
            }

        case 'SUBMITTED':
            return {
                ...state,
                status: 'Submitted'
            }

        default:
            return state
    }
}

function FormReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);

    function countCharacters() {

        let fullName = state.firstName + state.lastName
        return fullName.length
    }

    function handleOnChange(event) {

        const { name, value } = event.target;

        if (name === "firstName") {
            dispatch({
                type: "TYPING_FIRSTNAME",
                payload: {
                    firstName: value,
                    numberOfCharacters: countCharacters()
                }
            });
        }

        if (name === "lastName") {
            dispatch({
                type: "TYPING_LASTNAME",
                payload: {
                    firstName: value,
                    numberOfCharacters: countCharacters()
                }
            });
        }
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        dispatch({ type: 'SUBMITING' });
        await delay(2000)
        dispatch({ type: 'SUBMITTED' });
    }

    return (
        <>
            <div style={{ padding: '0.5rem 5rem' }}>
                <h1>👉 Extracting state logic using Reducer</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        name="firstName"
                        placeholder='First Name'
                        type="text"
                        value={state.firsName}
                        onChange={(event) => handleOnChange(event)}
                    />
                    <input
                        name="lastName"
                        placeholder='Last Name'
                        type="text"
                        value={state.lastName}
                        onChange={(event) => handleOnChange(event)}
                    />
                    <button disabled={state.status === 'Submiting'} >Submit</button>
                </form>
                <p>
                    {state.numberOfCharacters}
                </p>
                {state.status === 'Typing' && <p>Started typing in the form</p>}
                {state.status === 'Submiting' && <p>Submiting...</p>}
                {state.status === 'Submitted' && <p>Submitted!</p>}
            </div>
        </>
    );
}

export default FormReducer;
