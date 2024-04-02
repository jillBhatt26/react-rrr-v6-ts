import { Link, useRouteError } from 'react-router-dom';

const CareersErrorPage = (): JSX.Element => {
    // fetch the error from rrr useRouteError hook
    const error = useRouteError() as unknown as Error;

    return (
        <div className="careers-error">
            <h2>Error</h2>

            <p>{error.message}</p>

            <Link to="/">Back to home page</Link>
        </div>
    );
};

export default CareersErrorPage;
