import React from "react";

// handling input and call it in main component.
function convertInput(props) {
    return (
        <label>
            Enter a number between 1 to 1000:
            <input
                className="container__input"
                onChange={props.onChange}
                type="number"
                maxLength="4"
            />
        </label>
    );
}
export default convertInput;
