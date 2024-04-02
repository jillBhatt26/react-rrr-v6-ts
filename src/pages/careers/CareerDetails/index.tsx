import { useLoaderData } from 'react-router-dom';
import { ICareer } from '../../../interfaces';

const CareerDetailsPage = (): JSX.Element => {
    const career: ICareer = useLoaderData() as unknown as ICareer;

    return (
        <div className="career-details">
            <h2>Career details for {career.title}</h2>
            <p>Starting salary: ₹{career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam culpa voluptatem nobis sequi iste earum, ratione
                    expedita quas doloremque nemo?
                </p>
            </div>
        </div>
    );
};

export default CareerDetailsPage;
