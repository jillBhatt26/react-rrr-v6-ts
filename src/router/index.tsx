// rrr imports
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';

// pages imports
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import AppLayout from '../layout/AppLayout';
import HelpLayout from '../layout/HelpLayout';
import HelpFAQPage from '../pages/help/FAQ';
import HelpContactPage from '../pages/help/Contact';
import ErrorPage from '../pages/Error';
import CareersLayout from '../layout/CareeersLayout';
import CareersPage, { careersLoader } from '../pages/Careers';

// create a router
const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        // NOTE: The parent is "Route" and not "Routes"
        <Route path="/" element={<AppLayout />}>
            {/* path === / */}
            <Route index element={<HomePage />} />

            {/* path === /about */}
            <Route path="about" element={<AboutPage />} />

            {/* path === /help */}
            <Route path="help" element={<HelpLayout />}>
                {/* path === /help/faq */}
                <Route path="faq" element={<HelpFAQPage />} />

                {/* path === /help/contact */}
                <Route path="contact" element={<HelpContactPage />} />
            </Route>

            <Route path="careers" element={<CareersLayout />}>
                <Route index element={<CareersPage />} loader={careersLoader} />
            </Route>

            {/* Error page, path === '*' */}
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

export default AppRouter;
