export interface Service {
    name: string;
    description: string;
    cost: number;
    addresses: IAddress[];
}

export interface IAddress{
    name: string;
    coordinate: string;
    
}