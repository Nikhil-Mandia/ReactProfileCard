import {Link} from"react-router-dom"
import style from "./home.module.css"
const Home=()=>{
    return(
        <section id={style.nav}>  
        <Link  className={style.link} to="/createUser">CREATE-USER</Link>
        <Link  className={style.link} to="/users">USERS</Link>

        </section>
    )
}
export default Home