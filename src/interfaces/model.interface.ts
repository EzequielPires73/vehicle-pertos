import { IBrand } from "./brand.interface";

export interface IModel {
    id: number;
    name: string;
    slug: string;
    brand?: IBrand;
}