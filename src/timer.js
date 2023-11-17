import './style1.css';

const Watch = ()=>{
const [startTime,setStartTime] =useState (null)
const [now,setNow] =useState (null)
const intervalRef = useRef (null)

function hnadleStart(){
  setStartTime(Date.now())
  setNow(Date.now())
  clearInterval(intervalRef.current)
  intervalRef.current =setInterval(()=>{
    setStartTime(Date.now())

  },10)
}
function stopTime(){
  clearInterval(intervalRef.current)
}
let secondPassed = 0;
if (startTime !== null && now !==null){
  secondPassed = (startTime -now)/1000
}
return (

  <div className= "container">
    <div>
      <li>
  <h4>{secondPassed.toFixed(3)}</h4>
  <button onClick= {hnadleStart}>start time</button>
  <button onClick= {stopTime}>stopTime</button>
  <h1>TIMER</h1>
  </li>
  </div>
  </div>

)
}
