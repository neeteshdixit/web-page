import { Link } from "react-router-dom";
import "../Nav.css";
function Navbar(){
    return(
        <>
        <div className="header">
        <div><Link className="link" to="/">Company Logo</Link>
        </div>
        <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </li>
        </ul>
        </div>
        </div>
        </>
    )
}

export default Navbar;
