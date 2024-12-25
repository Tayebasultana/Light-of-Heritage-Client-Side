import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {

    const [error, setError] = useState('');
const {handleRegister} = useContext(authContext) 
const navigate =useNavigate()
const location = useLocation()

const handleSubmit = (e) => {
   e.preventDefault()
   setError('')
   const name = e.target.name.value
   const image = e.target.image.value
   const email = e.target.email.value
   const password = e.target.password.value
  //  console.log(name, image, email, password)

   if(password.lenght<6){
    setError("Password must be in 6 character")
    return;
   }
   if(!/[a-z]/.test(password)){
    setError("At least one lower case letter needed")
    return;
   }
   if(!/[A-Z]/.test(password)){
    setError("At least one upper case letter needed")
    return;
   }

   handleRegister(email, password)
   .then(res=>{
    // manageProfile(name,image)
    navigate(location?.state ? location.state : "/")
    toast.success('Successfully register!');
   })
   .catch(err=>{
    setError(err.message)
   })
}



    return (
        <>
          <div className="bg-[#1d232a]">
          <div className="mt-[50%] md:my-7 lg:my-36 px-7 max-w-md space-y-4 bg-black p-7  mx-auto">
           
           <form action="" onSubmit={handleSubmit}>
           <div className="max-w-md space-y-4 mb-2 mx-auto">
            <h2 className="text-center text-3xl font-bold text-blue-200 ">Register</h2>
            <label className="input input-bordered flex items-center gap-2">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 16 16"
                 fill="currentColor"
                 className="h-4 w-4 opacity-70">
                 <path
                   d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
               </svg>
               <input type="text" name="name" className="grow" placeholder="Username" required/>
             </label>

             <label className="input input-bordered flex items-center gap-2">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 16 16"
                 fill="currentColor"
                 className="h-4 w-4 opacity-70">
                 <path
                   d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
               </svg>
               <input type="text" name="image" className="grow" placeholder="Image" />
             </label>

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
            <button type="submit" className="btn w-full text-black text-bold text-lg bg-blue-200">Register</button>
        </div>
           </form>
           <span className="text-white">Already have an account? </span> <NavLink to="/login" className="text-base text-blue-200 font-bold">Login</NavLink>
           {error?<p className="mt-2 text-red-500">{error}</p>:''}
           </div>
          </div>
        </>
    );
};

export default Register;