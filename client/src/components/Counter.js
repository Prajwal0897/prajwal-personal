import React,{useState} from 'react'

function Counter() {

    const [count,setCount] = useState(0)

    const countIncrement =() => {
        setCount(count + 1)
    }

    const countDecrement =() => {
        setCount(count - 1)
    }






  return (
    <div>
        <div>
            <p style={{fontFamily:'roboto', fontSize:'50px'}}>{count}</p>
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <button style={{width:'100px',height:'50px', margin:'auto',border:'10px', padding:'10px', borderRadius:'10px',background:'green'}} onClick={countIncrement}>Increment</button>
            <button style={{width:'100px',height:'50px', margin:'auto',border:'10px', padding:'10px', borderRadius:'10px',background:'orange'}} onClick={countDecrement}>Decrement</button>
        </div>


    </div>
  )
}

export default Counter