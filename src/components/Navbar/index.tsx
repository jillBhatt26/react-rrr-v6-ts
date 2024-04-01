import { NavLink } from 'react-router-dom';

const Navbar = (): JSX.Element => {
    return (
        <header>
            <nav>
                <h1>Job Router</h1>

                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="help">Help</NavLink>
                <NavLink to="careers">Careers</NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
