import { IEmployee } from "../../common/entities"
import { IItem } from "../../common/entities/item.entity"


export interface ICanvass {
    id: string
    rc_number: string
    date_requested: string
    purpose: string
    notes: string
    requested_by: IEmployee
    noted_by: IEmployee 
    items: IItem[]
}


