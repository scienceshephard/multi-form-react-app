import { Outlet } from "react-router-dom";
import NavBar from './navbar'

const Layout = () => {
    return ( 
        <div className="Layout">
            <NavBar />
            <Outlet  />
        </div>
     );
}
 
export default Layout;