import axios from 'axios';
import { ICareer } from '../../interfaces/careers';

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

export { fetchCareersLoader };
