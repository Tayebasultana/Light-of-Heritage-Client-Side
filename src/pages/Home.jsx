import AllHistoryOfBd from "../components/AllHistoryOfBd";
import Banner from "../components/Banner";
import TopLikedArtifacts from "../components/TopLikedArtifacts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopLikedArtifacts></TopLikedArtifacts>
            <AllHistoryOfBd></AllHistoryOfBd>
        </div>
    );
};

export default Home;