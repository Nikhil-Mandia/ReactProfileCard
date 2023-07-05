import { useEffect, useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


const Edit=()=>{
    let navigate=useNavigate()
    let {abc}= useParams()
    console.log(abc);
    
    let [name,setName]=useState("")
    let name1=(x)=>{
        setName(x.target.value)
    }
    
    
    let [sal,setSal]=useState("")
    let sal1=(x)=>{
        setSal(x.target.value)
    }
   
    let [company,setCompany]=useState("")
    let company1=(x)=>{
        setCompany(x.target.value)
    }
   
    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${abc}`)
        .then((response)=>{
            console.log(response.data);
            setName(response.data.name)
            setSal(response.data.sal)
            setCompany(response.data.company)
        })
        .catch(()=>{
            console.log("no");
        })
    },[])
    let z=(x)=>{
        x.preventDefault()
        let update1={name,sal,company}
        axios.put(`http://localhost:3000/users/${abc}`,update1)
        .then(()=>{
            console.log("yes");
        })
        .catch(()=>{
            console.log("Error");
        })
        navigate("/users")

    }

    return(
        <div className={style.form}>
            
                <form action="" id={style.form} >
                    <label htmlFor="">Name :</label> <input value={name} type="text"  onChange={name1}  placeholder="Name"/><br /><br /><br />
                    <label htmlFor="">Salary :</label> <input value={sal}  type="text"   onChange={sal1}  placeholder="Salary"/><br /><br /><br />
                    <label htmlFor="">Company  :</label> <input value={company}  type="text"  onChange={company1}  placeholder="Company"/><br /><br /><br />
                    <input type="button" value="Submit" className={style.button}  onClick={z} />

                </form>
        </div>
    )
}
export default Edit