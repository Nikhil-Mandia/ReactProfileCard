import Home from "./Crud/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Createuser from "./Crud/Createuser"
import Users from "./Crud/Users"
import Edit from "./Crud/Edit"
const App=()=>{
    return(
        <div>

                <BrowserRouter>
                <Home/>
                <Routes>
                    <Route element={<Createuser/>} path="/createUser"/>
                    <Route element={<Users/>} path="/users"/>
                    <Route element={<Edit/>} path="/edit/:abc"/>

                </Routes>
                </BrowserRouter>

        </div>
    )
}
export default App