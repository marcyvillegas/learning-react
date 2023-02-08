import { useContext } from 'react';
import { ModalContext } from '../context/ModalContextProvider';

function ButtonModal() {

    const { state, dispatch } = useContext(ModalContext);

    function toggleModal() {
        if (state.isModalOpen === false) return dispatch({ type: 'EMIT_OPEN_MODAL' });
        return dispatch({ type: 'EMIT_CLOSE_MODAL' });
    }

    function changeUser() {
        return dispatch({ type: 'EMIT_CHANGE_USER' });
    }

    console.log(state)

    return (
        <div style={{ padding: '0.5rem 5rem' }}>
            <h1>👉 Scaling Up with Reducer and Context</h1>
            <button onClick={changeUser}>Change User</button>
            <button onClick={toggleModal}>Toggle Modal</button>
        </div>
    );
}

export default ButtonModal;
