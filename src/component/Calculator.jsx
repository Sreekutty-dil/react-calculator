import React, { useState } from 'react';
import Display from './Display';
import ButtonContainer from './ButtonContainer';

export default function Calculator(props) {
    const [input,setInput] = useState("")
    const [output,setOutput] = useState("")

    const readVal = (val) => {
        console.log(`btn clicked`, val)
        switch(val) {
         case "CE":
             setInput("")
             setOutput("")
             break;
         case "C":
            setInput("")
            break;
        case "<-": setInput(input.slice(0,-1))
            break;
        case "sqr":
            setOutput(input * input)
            break;
        case "sqrt": setOutput(Math.sqrt(input))
            break;
        case "1/x": setOutput(1/input)
            break;
        case "+/-":
            if(Math.sign(input) == -1) {
                setInput(Math.abs(input)); // converts to positive
            } else {
                setInput(-input); // converts to negative
            }
            break;
        case "=":
            let res = eval(input)
            setOutput(res)
            break;
        default: setInput(input + val)   
        }
    }

    return (
        <div className='calc-container'>
            <div className='title'>
                <h1 className='txt'>Calculator</h1>
            </div>

            <div className='calc'>
                <Display inp={input} out={output}/>
                <ButtonContainer readVal={readVal}/>
            </div>
        </div>
    )
}