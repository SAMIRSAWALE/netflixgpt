import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";

const Body = () => {

    const AppRoute = createBrowserRouter([
        {
            path : "/",
            element : <Login />
        },
    ])
    return (
        <div>
            <RouterProvider router={AppRoute}/>
        </div>

    )
}
export default Body;