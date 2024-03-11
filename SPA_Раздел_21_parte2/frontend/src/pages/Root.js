import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import "./Root.module.css";


function RootLayout() {
    return (
        <>
        <MainNavigation/>
        <main>
           <Outlet/> 
        </main>
        
        </>
    )
}

export default RootLayout