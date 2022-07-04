
import axios from 'axios';
import React, {  useState } from 'react'
import {Link} from 'react-router-dom';

const RegisPage = () => {
    let [name, setName] = useState()
    let [password, setPassword] = useState()

    const regisLogin = async () => {
        console.log("post regis invoked",name, password);
        const response = await axios.post(`https://reqres.in/api/users` , { name:name, job:password }).catch(err=>console.log(err))
        console.log("registration rspoonse",response);
    }

    const handleChanger = (e) => {
        console.log("invoked", e.target.id ,e.target.value);
        if (e.target.id=="name") {
            setName(e.target.value)
        }
        else  if (e.target.id=="pass") {
            setPassword(e.target.value)
        }
    }

    return (
        <>
        <div className='regis-container'>
           <h1 className='main-heading'>Register</h1>
           <h3 className='heading'>Don't have an account? <span className='span-head'>create your account</span>, it takes less than a minute.</h3>
           <input type="text" placeholder="name" id='name' onChange={handleChanger} className="regis-name"></input>
           <input type="password" placeholder="password" id='pass' onChange={handleChanger} className="regis-pass"></input>
           <div className='regis-check'>
           <input type="checkbox" ></input>
           <label for="checkbox" className="regis-checkbox">I Accept terms and conditions & privacy policy</label>
           </div>
           <button className='regis-btn' onClick={regisLogin}> Login </button>
           <h3 className='signin'>Already have an account &nbsp; <Link  to="/LoginPage"> Signin </Link></h3>
        </div>
        </>
    )
}
export  default RegisPage; 