import { useContext, useEffect, useState } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";


const MyArtifacts = () => {
  const [artifactData, setArtifactData] = useState([]);
  const [email, setEmail] = useState('');
  const { user } = useContext(authContext); 

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);  

      fetch(`http://localhost:5000/my-artifacts?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
            setArtifactData(data); 
        })
        .catch((error) => {
          console.error("Error fetching visa data:", error);
        });
    } else {
      console.log("User not logged in or email not available");
    }
  }, [user]); 

  const handleDelete = _id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/my-artifacts/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    
                  const remaining = artifactData.filter((artifact) => artifact._id !== _id);
                  setArtifactData(remaining);
                    
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your artifact has been deleted.",
                        icon: "success"
                    });
                }
            })
            .catch((error) => {
                console.error("Error deleting artifact:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again.",
                    icon: "error"
                });
            });
        }
    });
};



    return (
        <div>
          <div>
              <h2 className='font-bold text-2xl py-10 text-center text-blue-400'>
                  MY ADDED ARTIFACTS
              </h2>
          </div>
           <div className="visa-data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-7 lg:px-20 py-7">
            {artifactData.length > 0 ? (
              artifactData.map((artifact) => (
                <div className="">
                <div className="card bg-blue-100 object-cover shadow-xl">
                 <figure className="px-4 pt-4">
                   <img
                     src={artifact.artifactImage}
                     alt="country image "
                     className="rounded-xl max-h-44 w-[100%] " />
                 </figure>
                 <div className="card-body items-center text-center -mt-4">
                   <h2 className="card-title font-bold">{artifact.artifactName}</h2>
                   <div className="flex flex-col">
                   <div className="mr-4"><p>Type: <span className="font-bold">{artifact.artifactType}</span></p></div>
                   <div><p>Context: <span className="font-bold">{artifact.historicalContext.substring(0,60)}....</span></p></div>
                   </div>
                   <p>{artifact.presentLocation}</p>
                   <div className="card-actions justify-end">
                   <div className="badge-outline">
                     <Link to={`/update/${artifact._id}`}>
                     <button className="bg-emerald-600 py-2 rounded-xl text-white font-bold px-1 md:px-4 flex items-center gap-0 md:gap-2">
                       Update 
                       <span className="text-lg flex items-center"><GrUpdate /></span>
                     </button>
                     </Link>
                   </div>
   
                   <div className=" badge-outline">
                       <button className="bg-emerald-600 py-2 rounded-xl text-white font-bold px-1 md:px-4 flex items-center gap-0 md:gap-2" onClick={() => handleDelete(artifact._id)}>
                           Delete
                           <span className="text-lg flex items-center"><MdDeleteForever /></span>
                       </button>
                   </div>
   
   
                       </div>
                 </div>
               </div>
   
               
           </div>
              ))
            ) : (
              <p className='text-center text-red-500 col-span-4 pb-40'>No artifact found for this email.</p>
            )}
          </div>
         </div>
    );
};

export default MyArtifacts;