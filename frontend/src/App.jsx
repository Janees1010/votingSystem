import React,{useState,useEffect} from 'react'
import "./App.css"
import axios from "axios"

const App = () => {
  const optionsArr = [{name:"Messi",count:0},{name:"Ronaldo",count:0},{name:"Lebrone",count:0},{name:"Trump",count:0}]
  const [options,setOptions] = useState(optionsArr)

  const incrimentLike = (index,name) => {
    setOptions((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, count: item.count + 1 } : item
      )
    );
    axios.post("http://localhost:4000/person/incriment-like",{name:name}).then((res)=>{
       console.log(res.data);
    })
  };

  const dicrimentLike = (index,name)=>{
    setOptions((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, count: item.count === 0 ? item.count : item.count - 1} : item
      )
    );
    axios.post("http://localhost:4000/person/dicriment-like",{name:name}).then((res)=>{
       console.log(res.data);
       
    }).catch(err=>console.log(err.message))
  }

  useEffect(()=>{
    axios.get("http://localhost:4000/person").then((res)=>{
      setOptions(res.data)
    }).catch((err)=>{
        console.log(err.message);
    })
  },[])
  
  return (
    <div>
       <h1 id="title">Vote For Your Favourite Person</h1>
       <div className='container'>
       {
         options?options.map((value,i)=>{
          return(<div className='flex'>
             <p>{value.name}</p>
             <button onClick={()=>incrimentLike(i,value.name)}>like</button>
             <button onClick={()=>dicrimentLike(i,value.name)}>dislike</button>
              <p>likes:{value.count}</p>
          </div>
          )  
         }) : "No persons"
       }
       </div>
    </div>
  )
}

export default App
