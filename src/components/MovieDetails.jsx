import { useParams } from "react-router-dom";
import useFetchMovieDetails from "../hooks/useFetchMovieDetails";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const MovieDetails = () => {
    const { id } = useParams();
    useFetchMovieDetails({ id });
    const navigate = useNavigate();

    const MovieData = useSelector((state) => state.nowPlaying.movieDetails);
    const MovieTrailerKey = useSelector((state) => state.nowPlaying.movieDetailsTrailer);
    // if (MovieData === null) return;
    if (!MovieData) {
  return (
    <div className="h-dvh bg-black flex flex-col items-center justify-center text-white">
      
      <div className="w-16 h-16 border-4 border-white/20 
                      border-t-white rounded-full 
                      animate-spin mb-6" />

      <p className="text-lg text-gray-400 tracking-wide">
        Loading movie...
      </p>
    </div>
  );
}

    return (
        <>
            {/* Home Button */}
            <div className="absolute top-6 left-6 z-20">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 
               bg-black/50 backdrop-blur-md
               px-4 py-2 rounded-full
               text-white text-sm font-medium
               border border-white/20
               hover:bg-white hover:text-black
               transition-all duration-300"
                >
                    <FaHome />
                    Home
                </button>
            </div>
            {/* Background Trailer */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <iframe
                    className="absolute top-1/2 left-1/2 
                           min-w-full min-h-full 
                           -translate-x-1/2 -translate-y-1/2 
                           scale-150"
                    src={`https://www.youtube.com/embed/${MovieTrailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${MovieTrailerKey}`}
                    title="Trailer"
                    allowFullScreen
                />
            </div>

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 -z-0 bg-gradient-to-t 
                        from-black via-black/70 to-black/20" />

            {/* Content */}
            <div className="relative text-white h-screen flex items-center">

                <div className="max-w-2xl px-16">

                    <h1 className="text-6xl font-extrabold mb-6">
                        {MovieData.title}
                    </h1>

                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        {MovieData.overview}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <span className="flex items-center gap-1"><FaStar /> {MovieData.release_date}</span>
                        <span className="flex items-center gap-1"><IoTime /> {MovieData.vote_average}</span>
                    </div>

                    {/* Optional Buttons */}
                    <div className="flex gap-4 mt-8">

                        <button className="bg-white text-black 
                                       px-6 py-2 rounded 
                                       font-semibold hover:bg-gray-200">
                            ▶ Play
                        </button>

                        <button className="bg-gray-600/70 
                                       px-6 py-2 rounded 
                                       font-semibold hover:bg-gray-600">
                            More Info
                        </button>

                    </div>

                </div>
            </div>
        </>
    )

}
export default MovieDetails;