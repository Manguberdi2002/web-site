import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../service/auth";
import { SingUserFailure, SingUserStart, SingUserSuccess } from "../slice/auth";
import { Input } from "../UI";
import {ValidationError} from "./";
const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {isLoading, isLoggedIn} = useSelector((state) => state.auth)

  const registerHanle = async(e) =>{
    e.preventDefault()
    dispatch(SingUserStart())
    const user = {username:name, email, password}
    try {
      const response = await AuthService.userRegister(user)
      console.log(response);
      console.log(user);
      dispatch(SingUserSuccess(response.user))
    } catch (error) {
      dispatch(SingUserFailure(error.response.data.errors))
    }
    
  }
  useEffect(() =>{
    if(isLoggedIn){
       navigate('/')
      }
  },[isLoggedIn])
  return (
    <div className="bg">
      <Link to='/' className="back">
      <i className="fa-solid fa-xmark"></i>
      </Link>
      <div className="container">
        <div className="reg_logo">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="70.44"
              viewBox="0 0 250 135.44202"
              width="120"
            >
              <g transform="matrix(1.25 0 0 -1.25 -5.3744 957.46)">
                <g>
                  <path
                    d="m201.11 703.35c-3.9668 11.853-14.57 20.95-22.05 26.151l7.0047 8.7327-2.0452 1.6971c-1.2358 1.0278-30.75 25.135-73.304 25.135l-1.0133-0.006c-42.558-0.38-72.125-25.64-73.363-26.71l-5.2396-4.5538 9.1117-0.27804c-9.929-7.15-21.898-18.14-32.114-34.31l-3.1018-4.9122 5.7566 0.76823c0.12358 0.0185 12.059 1.6003 21.644 1.6003 0.72292 0 1.4211-0.0103 2.0843-0.0268-2.2306-2.9123-5.046-6.7761-6.7184-9.7811l-3.0235-5.4312 6.0408 1.4706c0.07415 0.0206 7.773 1.864 18.767 1.864 16.232 0 42.055-3.9503 59.97-22.761l1.7445-1.833 1.9525 1.6106c0.14006 0.11946 11.534 11.653 29.434 16.465 4.0101 0.91652 8.0016 1.3799 11.861 1.3799h0.45723c0.24715 0 0.49843-0.004 0.74764-0.0124 2.0019-0.16889 4.0368-0.47577 6.045-0.90623 18.815-4.0368 19.556-14.848 19.581-15.422l0.0721-4.9595 4.148 2.7619c0.73116 0.48401 17.836 12.084 17.836 29.947 0 4.1851-0.78677 8.3641-2.2985 12.329"
                    fill="#fff"
                  />
                  <path
                    d="m131.78 4.5215c-52.541 0.4814-89.493 32.574-89.493 32.574l13.365 0.41c-12.816 7.808-32.16 22.652-48.021 47.762-0.0001 0 24.588-3.294 36.644-1.495-0.512 0.649-1.06 1.361-1.636 2.123-2.647 3.342-7.711 9.938-10.334 14.644 0 0 62.159-14.421 101.68 27.08 0.01 0 14.68-14.94 38.21-21.27 5.11-1.16 10.52-1.86 16.16-1.81 0.37 0 0.74 0.01 1.12 0.02 2.61 0.22 5.29 0.61 8.08 1.2 26.91 5.78 27.16 22.52 27.16 22.52s20.78-13.84 20.78-34.604c0-5.136-1.02-9.924-2.7-14.334-5.24-15.664-20.55-27.398-29.64-33.219l3.19-3.25 6.14-7.723s-37.46-31.112-90.7-30.628zm11.78 39.644c2.38 0.16 5.68 0.568 7.93 1.404 0.66 7.003 8.2 10.959 8.2 10.959-9.25 0.137-14.63-8.815-16.13-12.363z"
                    transform="matrix(.8 0 0 -.8 4.2995 765.96)"
                  />
                  <path
                    d="m130.31 14.617c-33.333 0.377-54.331 13.424-54.331 13.424 10.671 0.327 19.244 1.018 19.244 1.018-32.056 8.848-54.326 32.75-60.235 40.289 33.024-23.894 65.642-33.671 85.452-35.53 2.92-0.175 5.61-0.271 8.1-0.295-0.92-0.944-2.7-1.81-4.8-2.564-0.09-0.031-0.16-0.061-0.24-0.09-0.02-0.002-0.03-0.004-0.04-0.004-4.5-1.56-10.16-2.642-12.4-3.047-0.37-0.064-0.58-0.095-0.58-0.095h0.01c-0.27-0.052-0.42-0.075-0.42-0.075 4.95-0.69 9.8-0.819 14.51-0.507 4.49 0.262 8.75 0.936 12.74 1.894 19.69 4.529 35.19 15.337 41.45 20.229 7.31 1.472 14.75-0.442 21.36-5.241-6.04-4.834-20.54-14.646-20.54-14.646 10.68 3.313 20.77 9.102 24.53 11.543 2.24-1.735 3.82-3.695 3.82-3.695-10.88-7.685-22.27-12.629-33.35-15.69-16.3-5.273-31.24-7.065-44.28-6.918zm-1.33 29.863c-36.733 0.337-63.48 21.53-63.48 21.53 35.38-12.492 63.19-11.703 63.19-11.703 11.53 10.908 25.26 10.402 33.02 8.896-19.51-2.595-24.15-13.711-25.25-18.5-2.53-0.175-5.03-0.245-7.48-0.223zm77.17 6.581c-5.5 4.209-12.34 8.508-20.37 11.791-12.41 5.074-20.54 12.064-27.21 21.58 36.32-4.318 57.6 13.762 65.95 22.408 0.22 0.14 0.43 0.29 0.64 0.44 3.47-4.57 8.38-13.815 5.19-27.257 0 0 4.14 3.829 6.39 9.653-0.47-19.098-22.8-33.994-30.59-38.615zm-32.25 40.642c-9.52-0.166-17.4 1.665-21.78 3.404-1.77 3.309-3.9 8.663-5.64 12.453 20.92-13.267 38.88-11.447 59.02-7.28-10.94-6.248-22.09-8.411-31.6-8.577z"
                    transform="matrix(.8 0 0 -.8 4.2995 765.96)"
                    fill="#ffd046"
                  />
                </g>
              </g>
            </svg>
            <b>USM</b>
          </div>
          <div className="title">Please sign up</div>
          <ValidationError/>
          <form>
            <Input label={"Username"} state={name} setState={setName} />
            <Input label={"Email address"} state={email} setState={setEmail}/>
            <Input label={"Password"} type={'password'} state={password} setState={setPassword} />
            <button disabled={isLoading} onClick={registerHanle} className="btn btn-primary w-100 p-2 mt-4">{isLoading ? "loading..." :"Sign up"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
