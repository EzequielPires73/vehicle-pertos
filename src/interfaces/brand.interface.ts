import { IModel } from "./model.interface";

export enum VehicleType {
    car='car',
    motorcycle='motorcycle',
}

export interface IBrand {
    id: number;
    name: string;
    slug: string;
    vehicleType: VehicleType;
    models?: IModel[];
}