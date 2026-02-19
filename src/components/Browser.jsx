import NavBar from "./NavBar";
import SecondaryContainer from "./Secondarycontainer";
import useFetchNowPlaying from "../hooks/useFetchNowPlaying";
import MainContainer from "./MainContainer";

const Browser = () => {
    const data = useFetchNowPlaying();
    //this is early return coz if the store dont ahve any data
    if(data === null) return;

    return (
        <div>
            <NavBar />
            <MainContainer />
            <SecondaryContainer />
        </div>

        //main container 
        // video title 
        // video playing 
        // secondary container
        // movies cards
    );
}
export default Browser;