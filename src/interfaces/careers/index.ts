import type { Params } from 'react-router-dom';

export interface ICareer {
    id: number;
    title: string;
    salary: number;
    location: string;
}

export interface ICareerLoaderParams {
    params: Params<'id'>;
}
