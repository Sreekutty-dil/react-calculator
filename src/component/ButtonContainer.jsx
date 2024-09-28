import React from 'react';
import Button from './Button';

function ButtonContainer(props) {
    let btnArr = ["%","CE","C","<-","1/x","sqr","sqrt","/","7","8","9","*","4","5","6","-","1","2","3","+","+/-","0",".","="]
    return (
        <div className='btn-container'>
            {
                btnArr.map((item,index) => {
                    return (
                        <Button key={index} val={item} btnClick={props.readVal} />
                    )
                })
            }
        </div>
    )
}
export default ButtonContainer