import React from "react";
import ReactDom from "react-dom";
import "./styles.css"

const App = () => {

    return (
        <div className="App">
            HelloWorld
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement)