// rrr imports
import { RouterProvider } from 'react-router-dom';
import AppRouter from './router';

const App = (): JSX.Element => {
    return <RouterProvider router={AppRouter} />;
};

export default App;
