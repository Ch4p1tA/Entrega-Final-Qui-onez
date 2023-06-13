import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    const imgLogo = "../src/assets/Adidas-logo.png"
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"}>
                    <img className='imgLogo' src={imgLogo} alt="Logo adidas" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="navLink" to={"/"}> Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navLink" to={`/categoria/1`}> Indumentaria </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="navLink" to={`/categoria/2`}> Calzado </NavLink>
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar

