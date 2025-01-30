import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../styles/books.css"

export default function Books() {
    let [books,setBooks]=useState([])
    let [error,setError]=useState(null)
    useEffect(()=>{
        axios.get("https://honey-natural-gallium.glitch.me/Books")
        .then((res)=>setBooks(res.data))
        .then((res)=>{console.log(res)})

    },[])
    // let handleDelete=(id)=>{
    //     axios.delete(`https://honey-natural-gallium.glitch.me/Books/${id}`)
    // }
  return (
    <div>
        {books.map((ele)=>{
            return(
                <div className='bookspage'>
                    <div className='book-card'>
                        <h1>{`Book${ele.id}`}</h1>
                        <h2>Title:{ele.title}</h2>
                        <h4>Author:{ele.author}</h4>
                        <p>Category:{ele.category}</p>
                        <div className='btns'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>

                    </div>   
                </div>    
            )

        })}
       
      
    </div>
  )
}
