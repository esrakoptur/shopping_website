import Navbar from "../components/Navbar";
import { useState } from "react";

const User = () => {
  const [status, setStatus] = useState("login");

  return (

    <div className="d-flex flex-column gap-3">
         <div>
            <Navbar/>
         </div>
    
    <div className="d-flex justify-content-center gap-3">
    <button onClick={()=> setStatus('login')} type="button" className={status === 'login' ? "btn btn-dark": 'btn btn-outline-dark'}>Login</button>
    <button onClick={() => setStatus('register')} type="button" className={status === 'register' ? "btn btn-dark": 'btn btn-outline-dark'}>Register</button>
    </div>

    {
        status === 'register' &&   <input
        className="form-control "
        type="text"
        placeholder="Name Surname"
        aria-label="default input "
    ></input>
    }

        <input
            type="email"
            className="form-control "
            id="exampleFormControlInput1"
            placeholder="Email"
        />

        <input
            type="password"
            className="form-control "
            placeholder="Password"
            id="inputPassword"
        />

        {
            status === 'register' && <input
            type="password"
            className="form-control "
            placeholder="Password Again"
            id="inputPassword"
        />
        }
        <button type="button" className="btn btn-dark">{status === 'register' ? 'Register' : 'Login'}</button>
        </div>
    );
    };

export default User;
