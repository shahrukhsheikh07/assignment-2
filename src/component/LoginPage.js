
import axios from 'axios';
import React, {  useState } from 'react'
import {Link} from 'react-router-dom';
//  import RegisPage from './component/RegisPage';


const LoginPage = () => {

    let [username, setUsername] = useState()
    let [password, setPassword] = useState()

    const postLogin = async () => {
        console.log("post login invoked",username, password);
        const response = await axios.get("https://reqres.in/api/users/2" , { email:username, last_name:password }).catch((err)=>console.log(err))
        console.log("login response",response);
    }

    const handleChange = (e) => {
            console.log("invoked",e.target.id, e.target.value);
            if(e.target.id=="user"){
                setUsername(e.target.value)
            }
            else  if(e.target.id=="password"){
                setPassword(e.target.value)
            }
    }

    // useEffect(()=>{
    //     getData();
    // },[])

    return (
         <>
         <div className='parent-container'>
            {/* Login */}
        <div className='container'>
        <h2 className='login-head'>Login into your account</h2>
            <input type="text" id='user' placeholder='username' onChange={handleChange} className='username' />
            <input type="password" id='password' placeholder='password' onChange={handleChange} className='password' />
            <button className='log-btn' onClick={postLogin} >Login</button>
            <h3 className='signup'   >Don't have an account ? &nbsp; <Link  to="/RegisPage">Sign Up</Link></h3> 
        </div>
        </div>
         </>
                
                
    ) 


    
}

export  default LoginPage;