import React from "react";
import ReactDom from "react-dom";
import "./styles.css"
import Button from "./Button";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";


function soma(a, b) {
    alert  (a + b)
}

const App = () => {
    return (
        <div className="App">
            Hello World
            <div>
                <Button onClick={() => soma(10, 20)} name="Bruno Franco"/>
            </div>
            <ComponentA>
                <ComponentB>
                    <Button onClick={() => soma(40, 20)} name="Aline"/>
                </ComponentB>
            </ComponentA>
            
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement)