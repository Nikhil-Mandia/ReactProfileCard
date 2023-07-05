import { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"


const Createuser=()=>{
    let Navigate = useNavigate()
    let [name,setName]=useState()
    let name1=(x)=>{
        setName(x.target.value)
    }
    let [sal,setSal]=useState()
    let sal1=(x)=>{
        setSal(x.target.value)
    }
    let [company,setCompany]=useState()
    let company1=(x)=>{
        setCompany(x.target.value)
    }
    let y=(x)=>{
        x.preventDefault()
        let payload={name,sal,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("yes");
        })
        .catch(()=>{
            console.log("no");
        })

           Navigate("/users")


    }

    return(
        <div className={style.form}>
            <img src="https://i.pinimg.com/originals/56/c9/9d/56c99dfa1cbc60c17d1ef776ea084c8f.jpg" id={style.img} />
                <form action="" id={style.form} >
                    <label htmlFor="">Name :</label> <input value={name} type="text"  onChange={name1} placeholder="Name"/><br /><br /><br />
                    <label htmlFor="">Salary :</label> <input value={sal}  type="text"  onChange={sal1} placeholder="Salary"/><br /><br /><br />
                    <label htmlFor="">Company  :</label> <input value={company}  type="text"onChange={company1} placeholder="Company"/><br /><br /><br />
                    <input type="button" value="Submit" className={style.button}  onClick={y}/>

                </form>
        </div>
    )
}
export default Createuser