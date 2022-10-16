import logo from "./imgs/logo.svg"
import "./UI.css"

const Navbar = () => {
    return(
        <nav className="customNavbar">
            <div className="logoContainer">
                <a href="/"><img src={logo} alt="logo"/></a>
            </div>
            <div className="linksContainer">
                <ul>
                    <li><a href="/">Inicio</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar