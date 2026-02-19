import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browser from "./Browser";
import MovieDetails from "./MovieDetails";
import { Provider } from "react-redux";
import appStore from "../utils/redux-store/appStore";
import NavBar from "./NavBar";


const Body = () => {
    const AppLayout = () => {
        return (
            <div>
                <Provider store={appStore}>
                    <NavBar />
                    <Outlet />
                </Provider>
            </div>
        );
    }
    const AppRoute = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Login />
                },
                {
                    path: "/browser",
                    element: <Browser />
                },
                {
                    path: "/movie/:id",
                    element: <MovieDetails />
                }
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={AppRoute} />
        </div>

    )
}
export default Body;