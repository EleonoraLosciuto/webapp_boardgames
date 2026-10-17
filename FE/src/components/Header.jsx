import { NavLink } from "react-router"

const Header = () => (
    <header>
        <nav>
            <NavLink to="/">
                HOMEPAGE
            </NavLink>
            <NavLink to="/news">
                NEWSROOM
            </NavLink>
        </nav>
    </header>
)

export default Header;