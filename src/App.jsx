import React from "react";
import './App.css'
// import Applications from "./pages/Applications/Applications";
import ParentComponent from "./pages/Test/ParentComponent";
import ChildComponent from "./pages/Test/ChildComponent";

function App() {
    return (
        <div className="App">
            {/* <Applications /> */}
            <ParentComponent ChildElement={<ChildComponent></ChildComponent>}></ParentComponent>
            {/* <ChildComponent text="I am Usama"></ChildComponent> */}
        </div>
    );
}

export default App;
