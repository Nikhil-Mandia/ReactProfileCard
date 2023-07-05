import { useState,useEffect } from "react";   // very imp ask in interview
import axios from "axios";
import style from "./home.module.css"
import { Link } from "react-router-dom";

  let Users=()=>{
    let [content,setContent] =useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((response)=>{
            console.log(response.data);
            setContent(response.data)
        })
        .catch(()=>{
            console.log("didnot Get the data")
        })


    },[])
    let deleteData =(t)=>{
        axios.delete(`http://localhost:3000/users/${t}`)
        window.location.reload("/users")
    }
    console.log(content)
    return(
        <div className={style.card}>
            {content.map((x)=>{
                return(
                    <div id={style.card}>
                    
                            <table border={5}>
                            <th colSpan={2}><h1 id={style.head}>ID : {x.id}</h1></th>
                            <tr><td>Name :</td><td>{x.name}</td></tr>
                            <tr><td>Salary :</td><td>{x.sal}</td></tr>
                            <tr><td>Company :</td><td>{x.company}</td></tr>
                            <tr><td><Link to ={`/edit/${x.id}`}>Edit</Link></td>
                             <td onClick={()=>{deleteData(x.id)}} >Delete</td></tr>
                            
                            
                            
                         </table>

                    </div>
                )
            })}
        </div>
    )
}
export default Users