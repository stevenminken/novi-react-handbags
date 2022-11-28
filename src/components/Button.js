import React from "react";

function Button(props) {
    return (
        <button type="button" id={props.buttonId}>{props.textValue}</button>
    );
}

export default Button;