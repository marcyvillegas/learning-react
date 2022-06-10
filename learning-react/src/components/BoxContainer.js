import { useState } from 'react'
import { boxesData } from '../lib/boxesData.js'
import Box from './Box'

export default function BoxContainer() {

    // boxesData state
    const [boxesDataState, setBoxesDataState] = useState(boxesData)

    // function that updates the boxes
    function toggleOn(id) {

        setBoxesDataState(prevBoxesDataState => {

            // ARRAY MAP METHOD - declarative way
            return prevBoxesDataState.map((item) => {
                return item.id === id ? {...item, on: !item.on} : item
            })

            // TRADITIONAL FOR LOOP VERSION - imperative way
            // let newBoxes = []
            // for (let i = 0; i < prevBoxesDataState.length; i++) {
            //     let currentBox = prevBoxesDataState[i]
            //     if (currentBox.id === id) {
            //         const updatedBox = {
            //             ...currentBox,
            //             on: !currentBox.on
            //         }
            //         newBoxes.push(updatedBox)
            //     } else {
            //         newBoxes.push(currentBox)
            //     }
            // }
            // return newBoxes

            // FOR EACH METHOD
            // let newBoxes = []
            // prevBoxesDataState.forEach((item) => {
            //     if (item.id === id) {
            //         const updatedBox = {
            //             ...item,
            //             on: !item.on
            //         }
            //         newBoxes.push(updatedBox)
            //     } else {
            //         newBoxes.push(item)
            //     }
            // })
            // return newBoxes
        })
    }


    // mapping the boxes
    const boxes = boxesDataState.map((item) => {
        return (
            <Box key={item.id} on={item.on} toggleOn={() => toggleOn(item.id)} />
        )
    });

    return (
        <div style={{ padding: '0 5rem' }}>
            <h1>Boxes (Mapping a component, Updating state to a child component using event)</h1>
            <div style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
                {boxes}
            </div>
        </div>
    );
}
