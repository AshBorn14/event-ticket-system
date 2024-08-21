import { createBrowserRouter  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import GenerateQr from "../pages/GenerateQr";
import QrCode from "../pages/QrCode";
import GuestList from "../pages/GuestList";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"generate",
                element:<GenerateQr/>
            },
            {
                path:"qr",
                element:<QrCode/>
            },
            {
                path:"guestlist",
                element:<GuestList/>
            }
        ]
    }
])

export default router;