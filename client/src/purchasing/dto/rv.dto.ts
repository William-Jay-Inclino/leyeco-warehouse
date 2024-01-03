import { IITemDto } from "../../common/dto/IItem.dto"
import { IApprover, ICanvass, IEmployee } from "../../common/entities"

export interface IFormData{
    id?: string
    rc_no: string
    canvass: ICanvass | null
    supervisor: IEmployee | null
    date_requested: string
    work_order_no: string 
    work_order_date: string 
    items: IITemDto[]
    approvers: IApprover[]
}

export interface ICreateRVDto {
    canvass: ICanvass
    date_requested: string
    work_order_no: string 
    work_order_date: string 
    supervisor: IEmployee
    items: IITemDto[]
}

export interface IUpdateRVDto{
    id: string
    date_requested?: string
    work_order_no?: string 
    work_order_date?: string 
}

