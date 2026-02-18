import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";

const Body = () => {
    const AppRoute = createBrowserRouter([
        {
            path : "/",
            element : <Login />
        },
        {
            path : "/browser",
            element : <Browser />
        }
    ])
    return (
        <div>
            <RouterProvider router={AppRoute}/>
        </div>

    )
}
export default Body;