import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";
import useFetchTrailer from "../hooks/useFetchTrailer";

const MainContainer = () => {

  useFetchTrailer();
  const data = useSelector((state) => state.nowPlaying);

  if (!data?.movie_trailer || !data?.data) return;

  return (
    <div className="relative h-screen">
      <VideoTitle nowPlayingData={data.data} />
      <VideoTrailer  nowPlayingData={data.movie_trailer}/>
    </div>
  );
};
export default MainContainer;