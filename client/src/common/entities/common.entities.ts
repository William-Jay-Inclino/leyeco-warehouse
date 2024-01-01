import { IRV } from "../../purchasing/entities";
import { APPROVAL_STATUS, DEPARTMENT_STATUS, DIVISION_STATUS, EMPLOYEE_POSITION } from "./common.enums";



export interface IEmployee {
    id: string 
    department_id: string
    firstname: string 
    middlename: string | null 
    lastname: string 
    position: EMPLOYEE_POSITION

    // fields that are set programmatically

    label?: string 
}

export interface ISupplier {
    id: string 
    name: string 
    contact: string
}

export interface IDepartment {
    id: string
    division_id: string
    code: string
    name: string
    status: DEPARTMENT_STATUS
}

export interface IDivision {
    id: string
    code: string
    name: string
    status: DIVISION_STATUS
}

export interface IClassification {
    id: string
    name: string
}

export interface IUnit {
    id: string
    name: string
}

export interface IBrand {
    id: string
    name: string
}

export interface IApprover {
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


export interface IJOApproverDefault {
    id: string 
    approver_id: string 
    approver: IEmployee
    label: string
    order: number
}

export interface IRVApproverDefault {
    id: string 
    approver_id: string 
    approver: IEmployee
    label: string
    order: number
}

export interface ISPRApproverDefault {
    id: string 
    approver_id: string 
    approver: IEmployee
    label: string
    order: number
}

export interface IMEQSApproverDefault {
    id: string 
    approver_id: string 
    approver: IEmployee
    label: string
    order: number
}


export interface IPOApproverDefault {
    id: string 
    approver_id: string 
    approver: IEmployee
    label: string
    order: number
}