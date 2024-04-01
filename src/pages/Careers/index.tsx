import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { ICareer } from '../../interfaces/careers';

const CareersPage = (): JSX.Element => {
    // hook to use the loader function's returned data
    const careers = useLoaderData() as unknown as ICareer[];

    return (
        <div className="careers">
            {careers.map((career: ICareer) => (
                <Link key={career.id} to="/">
                    <p>{career.title}</p>
                    <p>Based in, {career.location}</p>
                    <p>Salary: {career.salary}</p>
                </Link>
            ))}
        </div>
    );
};

// loader function
export const careersLoader = async () => {
    try {
        const fetchCareersData = await axios({
            url: 'http://localhost:8000/careers'
        });

        return fetchCareersData.data;
    } catch (error: any) {
        alert(error.message ?? 'Failed to load careers page...');
    }
};

export default CareersPage;
