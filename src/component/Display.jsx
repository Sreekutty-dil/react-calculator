import React from 'react';

function Display(props) {
    return (
        <div className='display'>
            <span className="inp"> {props.inp === "" ? 0 : props.inp }</span>
            <span className="out"> {props.out === "" ? 0 : props.out }</span>
        </div>
    )
}
export default Display
