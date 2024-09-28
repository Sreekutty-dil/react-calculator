import React from "react";

export default function Button(props) {
    return (
        <button className="btn" onClick={() => props.btnClick(props.val)}>
            { props.val}
        </button>
    )
}