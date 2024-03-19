import React,{useEffect,useState} from 'react'
import axios from'axios'
import './User.css'
export default function User() {
    const[post,setpost]=useState([])

    useEffect(()=>
    {
        axios.get('http://localhost:3001/Student')
        .then(res=>{setpost(res.data)})
        .catch(err=>{console.log(err)})
    })
   
  return (
    <div >
      
      <div className="flex-container">
      {
        post.map(x=>(<div className="flex-items">
        <img src={x.Review} width={150} height={150}/>
       <p> {x.Product}</p><br></br>
       <p>{x.Quality}</p><br></br>
       <p> {x.Date}</p><br></br>
       <p> {x.Price}</p><br></br>
        </div>))
      }
      <br></br>
      </div>
    </div>
  )
}