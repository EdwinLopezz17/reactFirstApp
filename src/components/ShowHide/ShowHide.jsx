
import React, {useState} from 'react'

export default function ShowHide() {

    const [show, setShow] = useState(true)

    const handleClick = (event )=>{
        setShow (!show)
    }
  return (
    <div>
        
        <button onClick={handleClick}>
            {show ? 'Hide': 'Show'} Text
        </button>

        {show ? <h2>Hide me!</h2> : ""}
    </div>
  )
}
