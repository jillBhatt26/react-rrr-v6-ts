import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = (): JSX.Element => {
    const location = useLocation();

    let currentLink: string = ``;

    // create the crumbs component
    const crumbs = location.pathname
        .split('/')
        .filter(crumb => crumb.trim().length !== 0)
        .map((crumb, index) => {
            currentLink += `${index !== 0 ? '/' : ''}${crumb}`;
            return (
                <div className="crumb" key={index}>
                    <Link to={currentLink}>
                        {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
                    </Link>
                </div>
            );
        });

    return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;
