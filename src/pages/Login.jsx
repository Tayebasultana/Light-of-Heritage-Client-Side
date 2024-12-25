import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";



const Login = () => {
    const {handleGoogleLogin} = useContext(authContext)
    const {handleLogin} = useContext(authContext) 
    const [error, setError] = useState('');  
    const location = useLocation()
    // const { user } = useContext(authContext);
    const navigate =useNavigate()
    // console.log(location)


    const handleSubmit = (e) => {
       e.preventDefault()
       setError('')

       const email = e.target.email.value
       const password = e.target.password.value
      //  console.log(email, password)

       handleLogin(email, password)
       .then( res => {
        //  const loggedInUser = res.user; 
        
          navigate(location?.state ? location.state : "/")
          Swal.fire({
            text: "Log in successfully!",
            icon: "success",
          });
       })
       .catch(err=>{
        setError(err.message)
       })
      }

      const googleLoginHandler = () =>{
        handleGoogleLogin()
        .then(res =>{
          
          navigate(location?.state ? location.state : "/")
          toast.success('Successfully login!');
        })
      }




    return (
        <div className="bg-[#1d232a]">
            <div className=" md:my-7 lg:my-36 px-7 max-w-md space-y-4 bg-black p-7  mx-auto">
           
           <form action="" onSubmit={handleSubmit}>
           <div className="max-w-md space-y-4 mx-auto">
            <h2 className="text-center text-3xl font-bold text-blue-200 ">Login</h2>
            
            <label className="input input-bordered flex items-center gap-2">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 16 16"
                 fill="currentColor"
                 className="h-4 w-4 opacity-70">
                 <path
                   d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                 <path
                   d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
               </svg>
               <input type="text"name="email" className="grow" placeholder="Email" required/>
             </label>

             <label className="input input-bordered flex items-center gap-2">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 16 16"
                 fill="currentColor"
                 className="h-4 w-4 opacity-70">
                 <path
                   fillRule="evenodd"
                   d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                   clipRule="evenodd" />
               </svg>
               <input type="password" name="password" className="grow" placeholder="password" required/>
             </label>
             <div className=" text-right">
             <NavLink to="/forgetPassword" className="font-bold text-blue-200">Forget Password ? </NavLink>
             </div>
            <button type="submit" className="btn w-full text-black text-bold text-lg bg-blue-200 border-none hover:bg-blue-300 hover:text-black hover:border-none">Login</button>
        </div>
           </form>
           <div className="text-center ">
            <h4 className="mb-2">Or</h4>
            <button onClick={googleLoginHandler} className="btn w-full text-black bg-blue-200 border-2 border-none hover:bg-blue-300 hover:text-black hover:border-none mb-4">Log in with Google</button>
           </div>
           New to the website ?  <NavLink to="/register" className="text-blue-200 text-base font-bold">Register</NavLink>
           {error?<p className="mt-2 text-red-500">{error}</p>:''}
        </div>
        </div>
    );
};

export default Login;