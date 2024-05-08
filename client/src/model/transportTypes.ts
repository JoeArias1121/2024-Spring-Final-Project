export type DataEnvelope<T> = {
    data: T;
    isSuccess: boolean;
    message?: string;
};

export type DataListEnvelope<T> = {
    data: T[];
    totalCount: number;
    isSuccess: boolean;
    message?: string;
};