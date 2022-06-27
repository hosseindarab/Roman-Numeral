import React from "react";

// handling output result and call it in main component.
function convertOutput(props) {
    return (
        <div className="container__output">
            <h2>{props.value}</h2>
        </div>
    );
}

export default convertOutput;
