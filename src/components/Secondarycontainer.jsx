import { useSelector } from "react-redux";
import useFetchPopular from "../hooks/useFetchPopular";
import CardPopular from "./CardPopular";
import CardTopRated from "./CardTopRated";
import useFetchTopRated from "../hooks/useFetchTopRated";
import CardUpComing from "./CardUpComing";
import useFetchUpComing from "../hooks/useFetchUpComing";
import CardNowPlaying from "./CardNowPlaying";

const SecondaryContainer = () => {

    useFetchPopular();
    useFetchTopRated();
    useFetchUpComing();
    const popularData = useSelector((state) => state.nowPlaying.popular);
    const topRatedData = useSelector((state) => state.nowPlaying.topRated);
    const upComingData = useSelector((state) => state.nowPlaying.upcoming);
    const nowPlyaingData = useSelector((state) => state.nowPlaying.data);
    if(popularData === null || topRatedData === null || upComingData === null || nowPlyaingData === null) return;

    return(
        <div className="bg-gradient-to-r from-gray-400 to-white text-white py-8">
            <CardPopular data={popularData} />
            <CardTopRated data={topRatedData} />
            <CardUpComing data={upComingData} />
            <CardNowPlaying data={nowPlyaingData} />
        </div>
    )
}
export default SecondaryContainer; 