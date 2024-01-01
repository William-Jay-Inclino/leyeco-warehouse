import { ICanvass } from "."
import { APPROVAL_STATUS, IApprover, IClassification, IEmployee } from "../../common/entities"
import { IItem } from "../../common/entities/item.entity"

export interface IRV {
    id: string
    canvass_id: string
    canvass: ICanvass
    supervisor_id: string 
    supervisor: IEmployee
    classification_id?: string
    classification: IClassification | null
    rv_number: string
    date_requested: string
    work_order_no: string 
    work_order_date: string 
    items: IItem[]
    approvers: IApprover[]
    is_cancelled: boolean

    // fields that are set programmatically

    statusObj: IStatusObject
}


export interface IStatusObject {
    value: APPROVAL_STATUS | string,
    label: string,
    color: string,
}