// rrr imports
import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = (): JSX.Element => {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, dolore.
            </p>

            {/* Links to child components of help layout */}
            <nav>
                {/* NOTE: The route mentioned in to prop are relative to the nearest parent route tag containing a layout if provided */}
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact us</NavLink>
            </nav>

            <Outlet />
        </div>
    );
};

export default HelpLayout;
