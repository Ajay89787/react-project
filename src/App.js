// import  React,{ useState } from 'react';
// import './App.css';
// // import App from './oops';
// import {Resturent} from './Data';
// import App1 from './app1';
// import Image from './Image';
// function App() {
//   let person= {
//     name: "hello",
//     place : "react"
//   }

// import App from "app/lib/App";
// import { useRef, useState } from "react";

//   return (
//     <div>
//       <Image/>
//       <h1 style={{color:"red"}}>{person.name} i am comming from {person.place}</h1>

      

//     </div>
//   )
// }
// const Image = ()=>{
//   return(
//     <>
//     <img src="https://tse1.mm.bing.net/th?id=OIP.TrAbbR3oGA_Ban6kV98t0AHaE6&pid=Api&P=0&h=180"/>
//     </>
//   )
// }
// let Image = "https://tse2.mm.bing.net/th?id=OIP.HnmRcJHagRFLK94E_PcSPQHaE8&pid=Api&P=0&h=180"
// let resturent = "srikanya comfort"
// let cusins = "cusins: italian,chinees,north"
// let rating = "5 star"
// function App(){
  
//   return(
//   <div>
//   <Resturent/>
//   <Resturent/>
//   <Resturent/>
//   </div>
//   )
// }

// const Resturent = ()=>{

//   return(
//     <>
//     <img src={Image} />
//     <h1> {resturent}</h1>
//     <h2>{cusins}</h2>
//     <h3>{rating}</h3>
//     </>
//   )
// }

//  props concept............

// let data = [
//   {
//     image : "https://tse2.mm.bing.net/th?id=OIP.HnmRcJHagRFLK94E_PcSPQHaE8&pid=Api&P=0&h=180",
//      resturent :"srikanya comfort",
//      cusins : "cusins: italian,chinees,north",
//      rating : "5 star"

//   },
//   {
//     image : "https://tse2.mm.bing.net/th?id=OIP.HnmRcJHagRFLK94E_PcSPQHaE8&pid=Api&P=0&h=180",
//      resturent :"dawath",
//      cusins : "cusins: italian,chinees,north",
//      rating : "5 star" 
//   }
// ]

// function App(){
// return(
//   <div className='container'>
//     {
//       data.map((eachobj)=>{
//         const {image,resturent,cusins,rating}=eachobj;
//         return <Resturent image={image} resturent={resturent} cusins={cusins} rating={rating}/>
//       })
      
      
//     }

//   </div>
// )
// }
// const Resturent = (props)=>{


//     return(
//     <>
//     <img src={props.image} alt='resturent'/>
//     <h1> {props.resturent}</h1>
//     <h2>{props.cusins}</h2>
//      <h3>{props.rating}</h3>

//     </>
//     )
//   }

// task..............(props)

// let data = [
//   {
//     id :"1",
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: "Kulas Light"
//     },
//   {
//     "id": "2",
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: "Victor"
      
//     }
   
// ]
// function App(){
//   return(
//     <div className='container'>
//       {
//         data.map((eachObj)=>{
//           console.log(data)
//           const {id,name,username, email,address}=eachObj;
//           return <Details id={id} name={name} username={username} email={email} address={address}/>
//         })
        
        
//       }
  
//     </div>
//   )
//   }

// const Details = (props)=>{
//   return (
//   <>
//   <p>{props.id}</p>
//   <h3>{props.name}</h3>
//   <p>{props.username}</p>
//   <p>{props.email}</p>
//   <p>{props.address}</p>

  
//   </>
//   )
// }


// opps concept........
// function App(){

// const [data, setData] = useState(0)
// const changehandler = ()=>{
//   setData(data-1)
// }
// const incresechangehandler = ()=>{
//   setData(data+1)
// }
// return(
//   <div className='container'>
//     <button onClick={changehandler}>-</button>
//     <span>{data}</span>
//     <button onClick={incresechangehandler}>+</button>
//   </div>
// )
// }
// import  React,{ useEffect,useState } from 'react';
// import './App.css';
// import App from './oops';
// import {Resturent} from './Data';

// function App(){
//   const [data,setData] = useState(Resturent)
  
//   const deletehandler = (recievedid)=>{
//     console.log(recievedid)
//     const filterData = data.filter((eachobj)=>{
//       return eachobj.id !== recievedid
//     } )
//     setData(filterData)

//   }




// return(
//   <div className="container">
//       <ul>
//           {
//               data.map((eachobj)=>{
//                   const{image,resturent,cusins,rating,id} = eachobj
//                   return(
//                       <li key={id}>
//                           <div><img src={image}/></div>
//                           <div>{resturent}</div>
//                           <div>{cusins}</div>
//                           <div>{rating}</div>
//                           <button onClick={()=> deletehandler(id)}>delete</button>

//                       </li>
//                   )
//               }
//               )
                  
              

//           }

//       </ul>

//       </div>
//       )
//         }
// import  React,{ useEffect,useState } from 'react';
// // import './App.css';
//     function App() {
//     const URL = 'https://jsonplaceholder.typicode.com/users'

//     const [ UsersData, setUsersData] = useState([])
//      const fetchUsersData = async (apiUrl) => {
//       const responce = await fetch(apiUrl)
//       const data = await responce.json()
//       setUsersData(data)
//       console.log(data);
//      }
//      useEffect(()=>{
//       fetchUsersData(URL)
//      },[])
//      return(
     
           
//                  UsersData.map((eachobj)=>{
//                        const{id,name,username,email,} = eachobj
//                        return (
//                            <li key={id}>
//                                {/* <div><img src={name}/></div> */}
//                                <div>{name}</div>
//                                <div>{username}</div>
//                                <div>{email}</div>
//                                {/* <button onClick={()=> deletehandler(id)}>delete</button> */}
     
//                            </li>
//                        )
//                    }
//                    )

//            )}

// import './App.css'
//import React,{useReduser,useContext} from 'react'
// import React from 'react';
// import ChildTwo from './childtwo';
// import './style1.css';

// export const UserContext = React.createContext()
// function App (){
//     return (
//         <>
//         <div className='APP' >
//          <div className='kiran'>
//            <center> <UserContext.Provider value ={'coming from context'}> 
//                 <ChildTwo/>
//             </UserContext.Provider>
//             </center> 
//              </div>


//         </div>
//         </>
//     )
// }
    
//     import TestEffect from './TestEffect';
//     function App () {
//            return (
//             <TestEffect></TestEffect>
//            )
           
           
//     }      
       
    //  
    // import TestEffect from "./TestEffect";
    //    function App (){
    //     return (
    //       <TestEffect></TestEffect>
    //     )

    //    }


        // function App(){
        //   let ref = useRef(0)

        //   function handlClick(){
        //     ref.current = ref.current + 1
        //     alert ("clicked" + ref.current + "times!")
        //   }

        //   return (
        //     <div className='container'>

        //       <button onClick={handlClick}>SHARE THE POST</button>

        //     </div>
        //   )
        // }
       
        
// // import App from "app/lib/App";
// import React,{useState, useEffect} from "react";
// // import './style1.css';
//        const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

//        const App =() =>{
//           const [UsersData, setUsersData] = useState([]);
//           const [searchTerm, setSearchterm] = useState('');
//           const [loading, setLoading] = useState(false);
//           const [isError,setIsError] = useState({status:false,msg:''})

//           const fetchData = async (apiURL) => {
//             setLoading(true)
//             setIsError({status:false,msg:''})
//             try {
//               const response = await fetch(apiURL);
//               const {drinks} = await response.json();
//               setUsersData(drinks)
//               setLoading(false)
//               setIsError({status:false,msg:''})
//               if(!drinks){
//                 throw new Error ("data not found")
//               }
//             } catch (error){
//               setLoading(false)
//               setIsError({status:true,msg:error.message || "something went wrong..."})
//             }
//           }
//           useEffect(()=>{
//             const correctURL = `${URL}${searchTerm}`
//             fetchData(correctURL)
//            }, [searchTerm])
//            return (
//             <>
//             <div className="container">
//               <div className="parent">
//                 <input typr="text" name ='search' placeholder='search' value={searchTerm} onChange={(e)=> setSearchterm (e.target.value)}/> 

//               </div>
//               <hr/>
//               {loading && !isError?.status && <h5>loading....</h5>}
//               {
//                 !loading && !isError?.status && 
//                 <ul>
//                   {
//                     UsersData.map((eachDrink)=>{
//                       const {strDrinkThumb,strDrink, idDrink} =eachDrink;
//                       return< li key={idDrink}>
//                         <div className="image"><img src={strDrinkThumb} alt=""/></div>
//                         <div className="brandName">{strDrink}</div>
//                       </li>
//                     })
//                   }
//                 </ul>
//               }

//             </div>
//             </>
//            )
//        }
import React,{useState, useEffect} from "react";

const App =() => {
  const [count,setCount] = useState (0)
  const [number,setNumber] =useState(5)
  const factorial =React.useMemo(()=>fact(number),[number])
  const handleChange = ()=> {
    setCount(count+1)
  }
  return (
    <>
    {factorial}
    <button onClick={handleChange}>share</button>
    {count}
    </>
  )
}
const fact =(n) =>{
  let answer =1;
  for (var i=n;i>=1;i--){
    answer = answer*i
  }
  console.log("FACTORIAL CALLED")
  return answer
}
     export default App