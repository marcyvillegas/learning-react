import { useState } from 'react';

export default function ShowHideComponents() {

    const [tabs, setTabs] = useState({
        isTabOneClicked: false,
        isTabTwoClicked: false,
        isTabThreeClicked: false
    });

    function showHideComponent(name) {
        switch (name) {
            case "isTabOneClicked":
                setTabs({ isTabOneClicked: true });
                // setTabs((prevData) => { return { ...prevData, isTabOneClicked: true } }); <-- copies the whole state then update what comes after the spead operator
                break;
            case "isTabTwoClicked":
                setTabs({ isTabTwoClicked: true });
                // setTabs((prevData) => { return { ...prevData, isTabTwoClicked: true } }); <-- when tab 1 is clicked, it is set to true then when tab 2 is clicked it, it will copy the previous state where in tab 1 is true then it will also set tab 2 as true
                break;
            case "isTabThreeClicked":
                setTabs({ isTabThreeClicked: true });
                // setTabs((prevData) => { return { ...prevData, isTabThreeClicked: true } }); <--  
                break;
            default:
                break;
        }
    }

    return (
        <div style={{ padding: '0 5rem' }}>
            <h1>ShowHideComponents</h1>
            <button onClick={() => showHideComponent("isTabOneClicked")} >Tab 1</button>
            <button onClick={() => showHideComponent("isTabTwoClicked")} >Tab 2</button>
            <button onClick={() => showHideComponent("isTabThreeClicked")} >Tab 3</button>

            <div style={{padding: "1rem"}}>
                {
                    tabs.isTabOneClicked &&
                    <div style={{ marginTop: '2rem' }}>Content for Tab 1</div>
                }
                {
                    tabs.isTabTwoClicked &&
                    <div style={{ marginTop: '2rem' }}>Content for Tab 2</div>
                }
                {
                    tabs.isTabThreeClicked &&
                    <div style={{ marginTop: '2rem' }}>Content for Tab 3</div>
                }
            </div>
        </div>
    );
}
