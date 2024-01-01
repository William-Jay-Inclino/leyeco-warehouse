import { IBrand, IUnit } from "."
import { ICanvass, IRV } from "../../purchasing/entities"


export interface IItem {
    id: string
    canvass_id?: string | null
    canvass?: ICanvass
    jo_id?: string | null
    rv_id?: string | null
    rv?: IRV
    spr_id?: string | null
    description: string
    brand_id: string | null
    brand: IBrand | null
    unit_id: string
    unit: IUnit 
    quantity: number 
}