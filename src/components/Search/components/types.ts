import { SearchTypes } from '../types';

export interface SearchVariables {
    count: number;
    type: SearchTypes;
    query: string;
}
