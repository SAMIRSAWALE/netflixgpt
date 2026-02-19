import { useNavigate } from "react-router-dom";

const CardTopRated = ({data}) =>{

        const results = data.results;
        const navigate = useNavigate();

        const handleCallMovieDetailsPage = (id) => {
            // console.log("this is the id of that movie",id)
            navigate(`/movie/${id}`);
        }


    return(
    <div className="mt-40">
      <div className="absolute z-10 w-full px-4 text-4xl text-white font-semibold" style={{marginTop: "-50px"}}>
             <h1 className="text-3xl">Top Rated Movies</h1>
        </div>
    {/* <div className="flex overflow-x-scroll scrollbar-hide space-x-4 p-2 -mt-20 ml-3">     */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 p-2 -mt-20 ml-3">
      {results.map((movie) => (
        <div key={movie.id} className="flex-shrink-0 w-40">
          <img
            onClick={() => handleCallMovieDetailsPage(movie.id)}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
    </div>
    );


}
export default CardTopRated;