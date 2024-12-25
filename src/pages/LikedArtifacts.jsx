import { useLoaderData } from "react-router-dom";

const LikedArtifacts = () => {
    const likedArtifacts = useLoaderData();
    return (
        <div className="p-10 bg-blue-50 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-8">Liked Artifacts</h2>
            
            {/* যদি কোনো ডেটা না থাকে */}
            {likedArtifacts.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p className="text-xl">You have not liked any artifacts yet.</p>
                    <p className="mt-4">Start exploring and like your favorite artifacts!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {likedArtifacts.map((artifact) => (
                        <div key={artifact._id} className="bg-white shadow-md p-4 rounded-lg">
                            <img
                                src={artifact.artifactImage}
                                alt={artifact.artifactName}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">{artifact.artifactName}</h3>
                            <p className="text-gray-600">{artifact.artifactType}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LikedArtifacts;
