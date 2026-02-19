import { useSelector } from "react-redux";
import useFetchSearchMovie from "../hooks/useFetchGptSearch";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w300";

const GptMovieCards = ({ movieList }) => {
    useFetchSearchMovie({ query: movieList });
    const data = useSelector((state) => state.nowPlaying.gptMovieCards);

    if (!data) return null;

    return (
        <div className="flex gap-4 overflow-x-auto px-6 py-4">
            {data.map((movieGroup, index) => {
                const movie = movieGroup.results?.[0]; // take top result
                if (!movie || !movie.poster_path) return null;

                return (
                    <div
                        key={index}
                        className="min-w-[150px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20"
                    >
                        <img
                            src={`${IMG_BASE_URL}${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-[220px] object-cover"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default GptMovieCards;