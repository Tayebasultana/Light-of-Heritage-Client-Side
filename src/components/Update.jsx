import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const artifact = useLoaderData();
  const navigate = useNavigate()
  const {
    _id,
    artifactName,
    artifactImage,
    artifactType,
    historicalContext,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
  } = artifact;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const updatedArtifact = {
      artifactImage: form.image.value,
      artifactName: form.name.value,
      artifactType: form.artifactType.value,
      historicalContext: form.description.value,
      createdAt: form.createdAt.value,
      discoveredAt: form.discoveredAt.value,
      discoveredBy: form.discoveredBy.value,
      presentLocation: form.presentLocation.value,
    };

    // Send updated artifact data to the server
    fetch(`http://localhost:5000/artifacts/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedArtifact),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
            form.reset(); 
          Swal.fire({
            title: "Updated!",
            text: "Your artifact has been updated successfully.",
            icon: "success",
          });
          navigate('/my-artifacts')
        } else {
          Swal.fire({
            title: "No Changes",
            text: "No updates were made to the artifact.",
            icon: "info",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating artifact:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while updating the artifact.",
          icon: "error",
        });
      });
  };

  return (
    <div className="py-4 md:py-10 lg:py-20 px-2 md:px-7 lg:px-32">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center text-3xl font-bold mb-4 text-blue-400">
          Update Your Artifact
        </h2>

        <div className="space-y-2 grid grid-cols-2 gap-4">
          {/* Artifact Image */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold text-blue-400">
                Artifact Image
              </span>
            </div>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              defaultValue={artifactImage}
              className="input input-bordered border-blue-500 bg-blue-100 text-black border-2 grow w-full"
            />
          </label>

          {/* Artifact Name */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold text-blue-400">
                Artifact Name
              </span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Artifact Name"
              defaultValue={artifactName}
              className="input input-bordered border-blue-500 bg-blue-100 text-black border-2 grow w-full"
            />
          </label>

          {/* Artifact Type */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold text-blue-400">
                Artifact Type
              </span>
            </div>
            <select
              name="artifactType"
              className="input input-bordered border-blue-500 bg-blue-100 text-black border-2 grow w-full"
              required
              defaultValue={artifactType}
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
              <span className="label-text font-bold text-blue-400">
                Historical Context
              </span>
            </div>
            <textarea
              name="description"
              placeholder="Historical Context"
              defaultValue={historicalContext}
              className="textarea textarea-bordered border-blue-500 bg-blue-100 text-black border-2 grow w-full"
            ></textarea>
          </label>

          {/* Created At */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold text-blue-400">
                Created At
              </span>
            </div>
            <input
              type="text"
              name="createdAt"
              placeholder="Created At"
              defaultValue={createdAt}
              className="input input-bordered border-blue-500 bg-blue-100 text-black border-2 grow w-full"
            />
          </label>

          {/* Discovered At */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold text-blue-400">
                Discovered At
              </span>
            </div>
            <input
              type="text"
              name="discoveredAt"
              placeholder="Discovered At"
              defaultValue={discoveredAt}
              className="input input-bordered border-blue-500 bg-blue-100 text-black border-2 grow w-full"
            />
          </label>

          {/* Discovered By */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold text-blue-400">
                Discovered By
              </span>
            </div>
            <input
              type="text"
              name="discoveredBy"
              placeholder="Discovered By"
              defaultValue={discoveredBy}
              className="input input-bordered border-blue-500 bg-blue-100 text-black border-2 grow w-full"
            />
          </label>

          {/* Present Location */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-bold text-blue-400">
                Present Location
              </span>
            </div>
            <input
              type="text"
              name="presentLocation"
              placeholder="Present Location"
              defaultValue={presentLocation}
              className="input input-bordered border-blue-500 bg-blue-100 text-black border-2 grow w-full"
            />
          </label>

          <button
            type="submit"
            className="btn w-3/4 text-white text-bold text-lg bg-gray-600 col-span-2 mx-auto mb-7"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
