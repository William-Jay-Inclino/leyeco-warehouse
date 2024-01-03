import { IJO, IRV, ISPR, REQUEST_TYPES } from "../../common/entities"

export interface IFormData{
    id?: string
    jo?: IJO
    rv?: IRV
    spr?: ISPR
    reference_type: REQUEST_TYPES 
    meqs_date: string 
    purpose: string
}

export interface ICreateMEQSDto {
    jo?: IJO
    rv?: IRV
    spr?: ISPR
    reference_type: REQUEST_TYPES 
    meqs_date: string 
    purpose: string
}

export interface IUpdateRVDto{
    id: string
    jo?: IJO
    rv?: IRV
    spr?: ISPR
    reference_type?: REQUEST_TYPES 
    meqs_date?: string 
    purpose?: string
}

