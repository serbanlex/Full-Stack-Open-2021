import React from 'react'

const InputEntry = (props) => {
    return (
    <div>
        {props.name}: <input onChange={props.onChangeHandler} placeholder={`Enter a new ${props.name}`}/>
    </div>
    )
  }
  

export default InputEntry