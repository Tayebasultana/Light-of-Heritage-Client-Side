import Swal from "sweetalert2";
import { authContext } from "../components/AuthProvider/AuthProvider";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";

const AddArtifacts = () => {
  const { user } = useContext(authContext); 
  const navigate = useNavigate()

  const email = user.email;
  
  const handleAddArtifact = (e) => {
    e.preventDefault();

    const form = e.target;

    // Get form values
    const artifactName = form.artifactName.value;
    const artifactImage = form.artifactImage.value;
    const artifactType = form.artifactType.value;
    const historicalContext = form.historicalContext.value;
    const createdAt = form.createdAt.value;
    const discoveredAt = form.discoveredAt.value;
    const discoveredBy = form.discoveredBy.value;
    const presentLocation = form.presentLocation.value;
    

    // Construct new artifact object
    const newArtifact = {
      artifactName, 
      artifactImage, 
      artifactType, 
      historicalContext, 
      createdAt, 
      discoveredAt, 
      discoveredBy, 
      presentLocation,
      likes: 0,
      email,
    };
    console.log(newArtifact)

    fetch('http://localhost:5000/artifacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArtifact), 
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) { 
            Swal.fire({
              text: 'Artifact added successfully!',
              icon: 'success',
            });
            form.reset(); 
            navigate('/my-artifacts')
          }
        })
        .catch((err) => {
          Swal.fire({
            text: 'Error adding artifact: ' + err.message,
            icon: 'error',
          });
        });
      
  };

  return (
    <div className="text-emerald-200 bg-white dark:bg-[#b9dee7]">
      <div className="py-7 w-11/12 mx-auto">
        <form onSubmit={handleAddArtifact}>
          <h2 className="text-center text-3xl font-bold mb-4 text-black">
            Add Artifact
          </h2>

          <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Artifact Name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-black">Artifact Name</span>
              </div>
              <input 
                type="text" 
                name="artifactName" 
                placeholder="Artifact Name" 
                className="input input-bordered  border-2 grow w-full" 
                required 
              />
            </label>

            {/* Artifact Image (URL) */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-black">Artifact Image (URL)</span>
              </div>
              <input 
                type="url" 
                name="artifactImage" 
                placeholder="Image URL" 
                className="input input-bordered border-emerald-900 border-2 grow w-full" 
                required 
              />
            </label>

            {/* Artifact Type */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-black">Artifact Type</span>
              </div>
              <select
                name="artifactType"
                className="input input-bordered border-emerald-900 border-2 grow w-full"
                required
              >
                <option value="Tools">Tools</option>
                <option value="Weapons">Weapons</option>
                <option value="Documents">Documents</option>
                <option value="Writings">Writings</option>
                <option value="Other">Other</option>
              </select>
            </label>

            {/* Historical Context */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-black">Historical Context</span>
              </div>
              <input 
                type="text" 
                name="historicalContext" 
                placeholder="Historical Context" 
                className="input input-bordered border-emerald-900 border-2 grow w-full" 
                required 
              />
            </label>

            {/* Created At */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-black">Created At</span>
              </div>
              <input 
                type="text" 
                name="createdAt" 
                placeholder="Created At" 
                className="input input-bordered border-emerald-900 border-2 grow w-full" 
                required 
              />
            </label>

            {/* Discovered At */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-black">Discovered At</span>
              </div>
              <input 
                type="text" 
                name="discoveredAt" 
                placeholder="Discovered At" 
                className="input input-bordered border-emerald-900 border-2 grow w-full" 
                required 
              />
            </label>

            {/* Discovered By */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-black">Discovered By</span>
              </div>
              <input 
                type="text" 
                name="discoveredBy" 
                placeholder="Discovered By" 
                className="input input-bordered border-emerald-900 border-2 grow w-full" 
                required 
              />
            </label>

            {/* Present Location */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-bold text-black">Present Location</span>
              </div>
              <input 
                type="text" 
                name="presentLocation" 
                placeholder="Present Location" 
                className="input input-bordered border-emerald-900 border-2 grow w-full" 
                required 
              />
            </label>

            {/* Add Artifact Button */}
            <button 
              type="submit" 
              className="btn w-3/4 text-white text-bold text-lg bg-[#346c7be0]  rounded-md hover:bg-[#357283e0] col-span-2 mx-auto mb-7"
            >
              Add Artifact
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArtifacts;
