import './App.css';
import './ajay.css'

// let data =[
//   {
    
//    imageURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgaNLr3QwE9Oy36FQS0CIuIFdn9YI2srUxQ&usqp=CAU",
//  restaurentName : 'Srikanya comfort',
//  cuisines : "Cusins: italian,chinees,north",
//  rating : "5 stars"
// },

  
// {

// imageURL :"https://tse2.mm.bing.net/th?id=OIP.HnmRcJHagRFLK94E_PcSPQHaE8&pid=Api&P=0&h=1800",
//  restaurentName : "srikanya",
//  cusins : "cusins: italian,chinees,north"
 
// },

// ]

function App(){

  return(
    <div class="ajay" >
      {
        data.map((eachObj)=>{
          const {imageURL, restaurent,cusins,rating}=eachObj;
          return <Resturent imageURL={imageURL} restaurent={"srikanya"} cusins={"italian"} rating={"5 stars"}/> 

        })
      }

      </div>
  )
    }
const Resturent = (props)=>{
  return(
    <>
    <img src={props.imageURL}  alt='hello'/>
    <h1> {props.resturentNmae}</h1>
    <h5>{props.cuisines}</h5>
    
    
    </>
)
}
export default App;