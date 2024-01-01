import { ICanvass } from "../../purchasing/entities";
import { APPROVAL_STATUS, DEPARTMENT_STATUS, DIVISION_STATUS, EMPLOYEE_POSITION, REQUEST_TYPES } from "./common.enums";


export interface IEmployee { //done
    id: string 
    department_id: string
    firstname: string 
    middlename: string | null 
    lastname: string 
    position: EMPLOYEE_POSITION

    // fields that are set programmatically

    label?: string 
}

export interface ISupplier { // done
    id: string 
    name: string 
    contact: string
}

export interface IDepartment { // done
    id: string
    division_id: string
    code: string
    name: string
    status: DEPARTMENT_STATUS
}

export interface IDivision { // done
    id: string
    code: string
    name: string
    status: DIVISION_STATUS
}

export interface IVehicle {
    id: string
    name: string 
    plate_number: string
}

export interface IClassification { // done
    id: string
    name: string
}

export interface IUnit { // done
    id: string
    name: string
}

export interface IBrand { // done
    id: string
    name: string
}

export interface IApprover { // done
    id: string 
    approver_id: string 
    jo_id?: string 
    rv_id?: string
    rv?: IRV 
    spr_id?: string 
    meqs_id?: string 
    po_id?: string 
    date_approval: string
    notes: string 
    status: APPROVAL_STATUS 
    label: string 
    order: number
}


export interface IJOApproverDefault { // done
    id: string 
    approver_id: string 
    approver: IEmployee
    label: string
    order: number
}

export interface IRVApproverDefault { // done
    id: string 
    approver_id: string 
    approver: IEmployee
    label: string
    order: number
}

export interface ISPRApproverDefault { // done
    id: string 
    approver_id: string 
    approver: IEmployee
    label: string
    order: number
}

export interface IMEQSApproverDefault { // done
    id: string 
    approver_id: string 
    approver: IEmployee
    label: string
    order: number
}


export interface IPOApproverDefault { // done
    id: string 
    approver_id: string 
    approver: IEmployee
    label: string
    order: number
}

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

export interface IJO {
    id: string
    canvass_id: string
    canvass: ICanvass
    supervisor_id: string 
    supervisor: IEmployee
    classification_id?: string
    classification: IClassification | null
    jo_number: string
    date_requested: string
    equipment: string
    department_id: string,
    department: IDepartment,
    items: IItem[]
    approvers: IApprover[]
    is_cancelled: boolean

    // fields that are set programmatically

    statusObj: IStatusObject
}

export interface ISPR {
    id: string
    canvass_id: string
    canvass: ICanvass
    supervisor_id: string 
    supervisor: IEmployee
    classification_id?: string
    classification: IClassification | null
    spr_number: string
    date_requested: string
    vehicle_id: string
    vehicle: IVehicle
    items: IItem[]
    approvers: IApprover[]
    is_cancelled: boolean

    // fields that are set programmatically

    statusObj: IStatusObject
}

export interface IMEQS {
    id: string
    jo_id?: string
    rv_id?: string
    spr_id?: string
    meqs_number: string 
    reference_type: REQUEST_TYPES
    meqs_date: string
}

export interface IPO {
    id: string 
    po_number: string 
    meqs_number: string 
    supplier_id: string 
    supplier: ISupplier 
    po_date: string 
    payment_terms: string 
}

export interface IPOItems {
    id: string 
    po_id: string 
    po: IPO 
    description: string 
    brand_id: string | null
    brand: IBrand | null
    unit_id: string 
    unit: IUnit 
    quantity: number 
    price: number 
}

export interface IStatusObject {
    value: APPROVAL_STATUS | string,
    label: string,
    color: string,
}

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