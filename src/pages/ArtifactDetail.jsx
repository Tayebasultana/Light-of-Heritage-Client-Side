import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";

const ArtifactDetail = () => {
    const artifact = useLoaderData();
    const [likes, setLikes] = useState(artifact.likes || 0);
    const {user} = useContext(authContext)

    const { artifactName, artifactImage, artifactType, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, _id} = artifact;

    const likeData = {
        artifactId: _id,
        artifactName,
        artifactImage,
        artifactType,
        historicalContext,
        createdAt,
        discoveredAt,
        discoveredBy,
        presentLocation,
        userEmail: user.email,
    };
    console.log("Like Data:", likeData);
    

    const handleLike = () => {

        fetch("http://localhost:5000/likes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(likeData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Like Response:", data);
                alert("Liked successfully!");
            })
            .catch((err) => console.error("Error posting like:", err));
        




        fetch(`http://localhost:5000/artifacts/${artifact._id}/like`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((updatedArtifact) => {
                setLikes(updatedArtifact.updatedLikes);
            })
            .catch((err) => console.error("Error updating likes:", err));
    };

    return (
        <div className="hero bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 min-h-screen py-16">
            <div className="hero-content flex-col lg:flex-row lg:gap-12 px-6 lg:px-20">
                {/* Artifact Image */}
                <div className="flex-shrink-0">
                    <img
                        src={artifactImage}
                        alt={artifactName}
                        className="max-w-lg rounded-lg shadow-lg border-4 border-blue-300"
                    />
                </div>

                {/* Artifact Details */}
                <div className="text-left lg:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-bold text-blue-700 mb-4">
                        {artifactName}
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        <span className="font-semibold text-blue-700">Type: </span>
                        {artifactType}
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        <span className="font-semibold text-blue-700">Historical Context: </span>
                        {historicalContext}
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        <span className="font-semibold text-blue-700">Created At: </span>
                        {createdAt}
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        <span className="font-semibold text-blue-700">Discovered At: </span>
                        {discoveredAt}
                    </p>
                    <p className="text-lg text-gray-600 mb-4">
                        <span className="font-semibold text-blue-700">Discovered By: </span>
                        {discoveredBy}
                    </p>
                    <p className="text-lg text-gray-600 mb-6">
                        <span className="font-semibold text-blue-700">Present Location: </span>
                        {presentLocation}
                    </p>

                    {/* Like Button */}
                    <div className="mt-6 flex items-center">
                        <button
                            onClick={handleLike}
                            className="btn btn-primary px-6 py-2 font-semibold text-white rounded-md shadow-md transition-transform duration-200 transform hover:scale-105"
                        >
                            Like
                        </button>
                        <span className="text-xl font-bold text-blue-700 ml-4">
                            Likes: {likes}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtifactDetail;
