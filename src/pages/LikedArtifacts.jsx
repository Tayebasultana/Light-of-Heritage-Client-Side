import { useEffect, useState, useContext } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const LikedArtifacts = () => {
    const { user } = useContext(authContext); 
    const [likedArtifacts, setLikedArtifacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-eleven-server-side-phi.vercel.app/likes?userEmail=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setLikedArtifacts(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching liked artifacts:", err);
                    setIsLoading(false);
                });
        }
    }, [user?.email]);

    const handleDelete = (_id) => {
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
                setDeletingId(_id);
                fetch(`https://assignment-eleven-server-side-phi.vercel.app/likes/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = likedArtifacts.filter((artifact) => artifact._id !== _id);
                            setLikedArtifacts(remaining);

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
                    })
                    .finally(() => setDeletingId(null));
            }
        });
    };

    if (isLoading) {
        return <p className="text-center text-gray-500">Loading your liked artifacts...</p>;
    }

    return (
        <div className="p-10 bg-blue-50 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-8">Liked Artifacts</h2>

            {likedArtifacts.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p className="text-xl font-bold">You have not liked any artifacts yet.</p>
                    <p className="mt-4">Start exploring and like your favorite artifacts!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {likedArtifacts.map((artifact) => (
                        <div key={artifact._id} className="bg-white shadow-md p-4 rounded-lg">
                            <img
                                src={artifact.artifactImage || "https://via.placeholder.com/150"}
                                alt={artifact.artifactName || "Artifact"}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{artifact.artifactName}</h3>
                                    <p className="text-gray-600">{artifact.artifactType || "Unknown Type"}</p>
                                </div>
                                <button
                                    onClick={() => handleDelete(artifact._id)}
                                    className={`font-bold ${deletingId === artifact._id ? "text-gray-500 cursor-not-allowed" : "text-red-500 hover:text-red-700"}`}
                                    disabled={deletingId === artifact._id}
                                >
                                    {deletingId === artifact._id ? "Deleting..." : "Delete"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LikedArtifacts;
