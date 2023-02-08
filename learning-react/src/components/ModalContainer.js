import { useContext } from 'react';
import { ModalContext } from '../context/ModalContextProvider';

function ModalContainer() {

    const { state } = useContext(ModalContext);

    return (
        <div style={{ padding: '0 5rem' }}>
            {state.isModalOpen &&
                <>
                    <p>Modal is Open</p>
                    <p>User is {state.user}</p>
                </>
            }
        </div>
    );
}

export default ModalContainer;
