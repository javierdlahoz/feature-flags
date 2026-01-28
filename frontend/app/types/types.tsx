export type Report = {
    id: number;
    title: string;
    customer: string;
    content: string;
}

export type FeatureFlags = {
    [key: string]: boolean;
}
