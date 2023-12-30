import { IBrand, IEmployee, IUnit } from "../../common/entities"

export interface IFormData{
    id: string
    date_requested: string
    purpose: string
    notes: string
    requested_by: IEmployee | null
    noted_by: IEmployee | null
    items: ICanvassItemDto[]
}

export interface ICreateCanvassDto {
    date_requested: Date
    purpose: string
    notes: string
    requested_by: IEmployee | null
    noted_by: IEmployee | null
    items: ICanvassItemDto[]
}

export interface IUpdateCanvassDto{
    id: string
    date_requested?: Date
    purpose?: string
    notes?: string
    requested_by?: IEmployee | null
    noted_by?: IEmployee | null
}

export interface ICanvassItemDto {
    description: string
    brand: IBrand | null
    unit: IUnit | null
    quantity: number 
}