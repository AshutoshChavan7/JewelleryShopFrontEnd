import { useEffect } from "react"
import {useHistory} from "react-router-dom" 


const LogOut =()=>{
    let history=useHistory();
   
    sessionStorage.removeItem('Role');
    sessionStorage.removeItem('userId');
    history.push("/home");

    return(
           alert("LogOut Successfuly")
    )
}
export default LogOut