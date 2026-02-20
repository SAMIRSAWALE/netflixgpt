import { useState } from "react";
import handleGptSearch from "../utils/googleAPT";
import GptMovieCards from "./GptMovieCards";

const GptSearch = () => {
    const [query, setQuery] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const movies = await handleGptSearch(query);
        setMovieList(movies);
        setShowResults(true);
    };

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex">
                <input
                    className="bg-slate-500/100 text-white p-2 rounded-md w-80"
                    type="text"
                    placeholder="Search Movie using the NetFlix AI"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="text-white bg-red-500 rounded-md ml-2 w-40 p-2">
                    NetFlix AI Search
                </button>
            </form>

            {showResults && movieList.length > 0 && (
                <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 z-50 w-fit">
                    {/* Close button */}
                    <button
                        onClick={() => setShowResults(false)}
                        className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
                    >
                        ✕
                    </button>
                    <h2 className="text-white font-bold text-lg mb-3 pr-6">AI Recommendations</h2>
                    <GptMovieCards movieList={movieList} />
                </div>
            )}
        </div>
    );
};

export default GptSearch;