import { useState } from "react"
import { useEffect } from "react"

function TestEffect(){
   const [timer,setTimer] = useState(0)
   const [counter,setCounter] = useState(0)
   useEffect(
    () => {
        console.log("inside use effect")
    },
    [counter]
   )
//    setInterval (()=>{
//     setTimer(timer+1)
//    },1000);

    return (
        <>
        <h1> Timer : {timer}
            {console.log("inside component")}
        </h1>
        <button onClick={()=>{
               setTimer(timer + 1)
        }}>update timer</button>

         <button onClick={()=>{
               setCounter(counter+ 1)
        }}>update counter</button>
       
        </>
    )
}
export default TestEffect