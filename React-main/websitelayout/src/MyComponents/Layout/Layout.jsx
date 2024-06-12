import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/header";

function Layout() {
    return (
        <>
        
        <Header />
        <Outlet/>
        <Footer />
        </>
    )
}
export default Layout;