import { DEPARTMENT_STATUS, DIVISION_STATUS, EMPLOYEE_POSITION } from "./common.enums";



export interface IEmployee {
    id: string 
    department_id: string
    firstname: string 
    middlename: string 
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

