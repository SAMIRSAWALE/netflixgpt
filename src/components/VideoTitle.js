import { FaInfoCircle, FaPlay } from "react-icons/fa";

const VideoTitle = ({ nowPlayingData }) => {

    // console.log("this is the data i am getting in video title", nowPlayingData.results[0].original_title);

    return (
        <div className="absolute top-1/3 left-20 text-white max-w-xl">

            <h1 className="text-6xl font-bold mb-4">
                {nowPlayingData.results[0].original_title}
            </h1>

            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {nowPlayingData.results[0].overview}
            </p>

            <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 
                       rounded-md bg-white text-black 
                       font-semibold hover:bg-gray-200 
                       transition">
                    <FaPlay />
                    Play
                </button>

                <button className="flex items-center gap-2 px-6 py-3 
                       rounded-md bg-gray-500/70 
                       backdrop-blur-sm
                       text-white font-semibold 
                       hover:bg-gray-500 
                       transition">
                    <FaInfoCircle />
                    More Info
                </button>
            </div>

        </div>

    )
}
export default VideoTitle;