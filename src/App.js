import React from 'react';

// function App() {
//     const greeting = "Hi, Tom!";
//     const dom = <h1 className="foo">{greeting}</h1>;
//     return dom;
// }

function App() {
    return (
        // <div>
        //     <label htmlFor="bar">bar</label>
        //     <input type="text" onChange={() => {console.log("I am clicked")}} />
        // </div>
        <React.Fragment>
            <label htmlFor="bar">bar</label>
            <input type="text" onChange={() => {console.log("I am clicked")}} />
        </React.Fragment>
    )
    // return <input type="text" onClick={() => {console.log("I am clicked")}} />;
}

export default App;
