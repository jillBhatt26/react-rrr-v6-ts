import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const AppLayout = (): JSX.Element => {
    return (
        <div className="root-layout">
            <Navbar />

            {/* Render the children of the Route component here using the Outlet component */}
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
