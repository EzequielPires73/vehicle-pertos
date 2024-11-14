import { IBrand } from "./brand.interface";
import { IModel } from "./model.interface";
import { IUser } from "./user.interdace";

export interface IVehicle {
    id?: number;
    type: string;
    category: string;
    color: string;
    fuelType: string;
    version: string;
    transmissionType: string;
    sellerType?: string;
    condition?: string;
    engine: string;
    doors: string;
    direction: string;
    cylinders: string;
    description: string;
    optionalFeatures?: string[];
    images?: string[];
    model: IModel;
    brand: IBrand;
    modelYear?: number;
    manufactureYear?: number;
    price?: number;
    mileage?: number; 
    interiorFeatures: Array<String>,
    exteriorFeatures: Array<String>,
    safetyFeatures: Array<String>,
    comfortFeatures: Array<String>,
    user?: IUser;
}