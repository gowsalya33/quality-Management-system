import React,{useEffect,useState} from 'react'
import axios from'axios'
import './Admin.css'
export default function Admin() {
  const[post,setpost]=useState([])
  const[id,setid]=useState(0)
    const[Product,setProduct]=useState('')
    const[Quality,setQuality]=useState('')
    const[Date,setDate]=useState('')
    const[Price,setPrice]=useState('')
    useEffect(()=>
    {
        axios.get('http://localhost:3001/Student')
        .then(res=>{setpost(res.data)})
        .catch(err=>{console.log(err)})
    })
    const handlesubmit=()=>
    {
        axios.post('http://localhost:3001/Student',
        {
           "id":id, "Product":Product,"Quality":Quality,"Date":Date,"Price":Price})
            .then(res=>{console.log(res)})
           .catch(err=>{console.log(err)})
    }
    const handledelete=(Date)=>
    {
        axios.delete(`http://localhost:3001/Student/${id}`)
        .then(res=>{console.log(res);
        setpost(post.filter(item=> item.Date!==Date));
      })
        .catch(err=>{console.log(err);});
    }
  return (
    <div className="place1">
      <center>
        <h1>Add Event</h1>
        </center>
      <br></br>
      <form className="form1" onSubmit={handlesubmit}>
        <br></br>
        <input type='number' placeholder="Id No"value={id} onChange={(e)=>setid(e.target.value)}/><br></br><br></br>
        <input type='text' placeholder="Product"value={Product} onChange={(e)=>setProduct(e.target.value)}/><br></br><br></br>
      
        <input type='text' placeholder="Quality"value={Quality} onChange={(e)=>setQuality(e.target.value)}/><br></br><br></br>
      
        <input type='text' placeholder="Date"value={Date} onChange={(e)=>setDate(e.target.value)}/><br></br><br></br>
        
        <input type='text'placeholder="Price" value={Price} onChange={(e)=>setPrice(e.target.value)}/><br></br><br></br>
        
        <button type='submit'>submit</button>
      </form>
      <br></br>
      <br></br>
      <table>
        <thead>
            <tr>
                <th>ProductName</th>
                <th>Quality</th>
                <th>Date</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {post.map(x=>(
                <tr>
                  <td>{x.id}</td>
                    <td>{x.Product}</td>
                    <td>{x.Quality}</td>
                    <td>{x.Date}</td>
                    <td>{x.Price}</td>
                   
                   <td><button onClick={()=>handledelete(x.id)}>Delete</button></td>
                </tr>
                
            ))}
        </tbody>
      </table><br></br>
      
    </div>
  )
}



