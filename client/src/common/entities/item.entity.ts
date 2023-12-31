import { IBrand, IUnit } from "."
import { ICanvass } from "../../purchasing/entities"


export interface IItem {
    id: string
    canvass_id?: string | null
    canvass?: ICanvass
    jo_id?: string | null
    rv_id?: string | null
    spr_id?: string | null
    description: string
    brand_id: string 
    brand: IBrand
    unit_id: string
    unit: IUnit 
    quantity: number 
}