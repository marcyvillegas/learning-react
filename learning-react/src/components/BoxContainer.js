import { useState } from 'react'
import { boxesData } from '../lib/boxesData.js'
import Box from './Box'

export default function BoxContainer() {

    // boxesData state
    const [boxesDataState, setBoxesDataState] = useState(boxesData)

    function toggleOn(id){
        console.log(id)
    }

    // mapping the boxes
    const boxes = boxesDataState.map((item) => {
        return (
            <Box key={item.id} on={item.on} toggleOn={toggleOn}/>
        )
    });

    return (
        <div style={{ padding: '0 5rem' }}>
            <h1>Boxes (Mapping a component)</h1>
            <div style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
                {boxes}
            </div>
        </div>
    );
}