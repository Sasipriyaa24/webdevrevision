import React from "react";
import ReactDOM from "react-dom";

function App() {

    function onInputChange(event) {
        console.log(event.target.value);
    }

    return (
        <div>
            <form>
                <label>Enter text</label>
                <input 
                    type="text"
                    onChange={onInputChange}
                />
            </form>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
export default App;