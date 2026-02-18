import NavBar from "./NavBar";
import useFetchUpComing from "../hooks/useFetchUpComing";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./Secondarycontainer";

const Browser = () => {
    const data = useFetchUpComing();


    //this is early return coz if the store dont ahve any data
    if(data === null) return;

    return (
        <>
            <NavBar />
            <MainContainer />
            <SecondaryContainer />
        </>

        //main container 
        // video title 
        // video playing 
        // secondary container
        // movies cards
    );
}
export default Browser;