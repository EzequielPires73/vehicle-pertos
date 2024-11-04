import { IBrand } from "./brand.interface";
import { IModel } from "./model.interface";

export interface IVehicle {
    id?: number;
    type: string;
    category: string;
    color: string;
    fuelType: string;
    transmissionType: string;
    sellerType?: string;
    condition: string;
    optionalFeatures?: string[];
    images?: string[];
    model: IModel;
    brand: IBrand;
    modelYear?: number;
    manufactureYear?: number; 
    price?: number;
    mileage?: number; 
}