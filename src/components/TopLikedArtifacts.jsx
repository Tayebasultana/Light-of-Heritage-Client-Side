import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const TopLikedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:5000/artifacts') 
      .then((res) => res.json())
      .then((data) => {
        
        const sortedArtifacts = data
          .sort((a, b) => b.likes - a.likes) 
          .slice(0, 6); 

        setArtifacts(sortedArtifacts);
      })
      .catch((error) => console.error('data fetching problem for :', error));
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Top Liked Artifacts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {artifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={artifact.artifactImage}
              alt={artifact.artifactName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{artifact.artifactName}</h3>
              <p className="text-gray-600 mb-3 text-sm">
                {artifact.historicalContext.length > 100
                  ? artifact.historicalContext.substring(0, 70) + '...'
                  : artifact.historicalContext}
              </p>
              <div className="flex items-center justify-between text-gray-700">
                <span className="text-sm font-medium">Likes: {artifact.likes}</span>
                <NavLink to={`/artifacts/${artifact._id}`} className="text-blue-500 text-sm font-semibold hover:underline">
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLikedArtifacts;
