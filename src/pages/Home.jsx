import AllHistoryOfBd from "../components/AllHistoryOfBd";
import BangladeshHistory from "../components/BangladeshHistory";
import Banner from "../components/Banner";
import RatingAndReview from "../components/RatingAndReview";
import ReviewsDisplay from "../components/ReviewsDisplay";
import TopLikedArtifacts from "../components/TopLikedArtifacts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BangladeshHistory></BangladeshHistory>
            <TopLikedArtifacts></TopLikedArtifacts>
            <AllHistoryOfBd></AllHistoryOfBd>
            <RatingAndReview></RatingAndReview>
            <ReviewsDisplay></ReviewsDisplay>
        </div>
    );
};

export default Home;