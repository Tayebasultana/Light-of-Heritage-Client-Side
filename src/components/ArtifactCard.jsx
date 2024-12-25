import { useNavigate } from 'react-router-dom';

const ArtifactCard = ({artifact}) => {

    const navigate = useNavigate();
  const handleGoToDetails =() => {
    // console.log("Visa ID:", visa.id);
    navigate(`/artifacts/${artifact._id}`);
  };


  const {
    artifactName, artifactImage, artifactType,  historicalContext} = artifact;


    return (
        <div>
        <div className="card bg-blue-100 object-cover shadow-xl">
          <figure className="px-4 pt-4">
            <img
              src={artifactImage}
              alt="country image "
              className="rounded-xl max-h-40 w-[100%] " />
          </figure>
          <div className="card-body items-center text-center -mt-4">
            <h2 className="card-title font-bold">{artifactName.substring(0,23)}..</h2>
            <div className="flex flex-col">
            <div className="mr-4"><p>Type: <span className="font-bold">{artifactType}</span></p></div>
            <div><p>{historicalContext.substring(0,60)}....</p></div>
            </div>
            <div className="card-actions">
             <button className="btn text-black bg-blue-200 border-2 border-none hover:bg-blue-300 hover:text-black hover:border-none px-7" onClick={handleGoToDetails}>See details</button>
            </div>
          </div>
        </div>
    </div>
    );
};

export default ArtifactCard;