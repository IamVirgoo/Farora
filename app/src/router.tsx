import {createBrowserRouter} from "react-router-dom";
import IndexPage from "./pages/indexPage";
import WelcomePage from "./pages/welcomePage";
import Registration from "./pages/registration";
import Player from "./pages/<player>";

export const Router = createBrowserRouter([
    {
        path : '/',
        element : <IndexPage/>,
    },
    {
        path : '/:id',
        element : <Player/>
    },
    {
        path : '/welcome',
        element : <WelcomePage/>
    },
    {
        path : '/registration',
        element : <Registration/>
    }
])