import React, { useState } from "react";
import loginIcon from "../assets/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <section id="login">
      <div className="mx-auto container p-4 bg-red-400">
        <div className="bg-white px-2 py-5 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login icon"></img>
          </div>

          <form>
            <div>
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email"
                  className="w-full h-full outline-none bg-transparent"
                ></input>
              </div>
            </div>
            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="enter password"
                  className="w-full h-full outline-none bg-transparent"
                ></input>
                <div className="cursor-pointer" onClick={()=>setShowPassword((preve)=> !preve)}>
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye /> }</span>
                </div>
              </div>
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
