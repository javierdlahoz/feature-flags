import { Report } from '@/app/types/types';

export const REPORT_1: Report = {
    id: 1,
    title: 'Car is quite damaged',
    customer: 'Alice Smith',
    content: 'My car got broken while driving :(.',
};

export const REPORT_2: Report = {
    id: 2,
    title: 'Tires need replacement',
    customer: 'Bob Johnson',
    content: 'The tires are worn out and need to be replaced soon.',
};

export const REPORT_3: Report = {
    id: 3,
    title: 'Brakes making noise',
    customer: 'David Brown',
    content: 'There is a squeaking noise when I apply the brakes.',
};
export const REPORTS: Report[] = [
    REPORT_1, REPORT_2, REPORT_3
];
