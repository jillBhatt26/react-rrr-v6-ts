// rrr imports
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';

// pages
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import HelpFAQPage from '../pages/help/FAQ';
import HelpContactPage from '../pages/help/Contact';
import ErrorPage from '../pages/Error';
import CareersPage from '../pages/careers/Careers';
import CareerDetailsPage from '../pages/careers/CareerDetails';
import CareersErrorPage from '../pages/careers/CareersError';

// layouts
import AppLayout from '../layout/AppLayout';
import CareersLayout from '../layout/CareersLayout';
import HelpLayout from '../layout/HelpLayout';

// services
import { fetchCareerDetailsLoader, fetchCareersLoader } from '../services';

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

            <Route
                path="careers"
                element={<CareersLayout />}
                errorElement={<CareersErrorPage />}
            >
                <Route
                    index
                    element={<CareersPage />}
                    loader={fetchCareersLoader}
                />
                <Route
                    path=":id"
                    element={<CareerDetailsPage />}
                    loader={fetchCareerDetailsLoader}
                />
            </Route>

            {/* Error page, path === '*' */}
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

export default AppRouter;
