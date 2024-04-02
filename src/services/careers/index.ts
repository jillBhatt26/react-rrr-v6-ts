import axios from 'axios';
import { ICareer, ICareerLoaderParams } from '../../interfaces';

const fetchCareersLoader = async (): Promise<ICareer[]> => {
    try {
        const fetchCareersData = await axios({
            url: 'http://localhost:8000/careers'
        });

        return fetchCareersData.data;
    } catch (error: any) {
        throw new Error(error.message ?? 'Failed to fetch careers data...');
    }
};

const fetchCareerDetailsLoader = async ({
    params
}: ICareerLoaderParams): Promise<ICareer> => {
    try {
        const fetchCareerDetailsData = await axios({
            url: `http://localhost:8000/careers/${params.id}`
        });

        return fetchCareerDetailsData.data;
    } catch (error: any) {
        throw new Error(error.message ?? 'Failed to fetch careers data...');
    }
};

export { fetchCareersLoader, fetchCareerDetailsLoader };
