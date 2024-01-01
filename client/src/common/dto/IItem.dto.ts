import { IBrand, IUnit } from "../entities"


export interface IITemDto {
    id?: string
    description: string
    brand: IBrand | null
    unit: IUnit | null
    quantity: number 
}
