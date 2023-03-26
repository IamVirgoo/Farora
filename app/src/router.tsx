import {createBrowserRouter} from "react-router-dom";
import IndexPage from "./pages/indexPage";
import WelcomePage from "./pages/welcomePage";
import Registration from "./pages/registration";

export const Router = createBrowserRouter([
    {
        path : '/',
        element : <IndexPage/>
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