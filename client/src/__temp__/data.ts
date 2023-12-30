import { faker } from '@faker-js/faker';
import { DEPARTMENT_STATUS, DIVISION_STATUS, EMPLOYEE_POSITION, IBrand, IClassification, IDepartment, IDivision, IEmployee, ISupplier, IUnit } from '../common/entities';

export const suppliers: ISupplier[] = [
    { 
        id: faker.string.uuid(),
        name: 'Robinson',
        contact: '+639000000000',
    },
    { 
        id: faker.string.uuid(),
        name: 'SM',
        contact: '+639000000000',
    },
    { 
        id: faker.string.uuid(),
        name: 'Puregold',
        contact: '+639000000000',
    }
]

const divId1 = faker.string.uuid()
const divId2 = faker.string.uuid()
const divId3 = faker.string.uuid()

export const divisions: IDivision[] = [

    {
        id: divId1,
        code: 'CICTE',
        name: 'College of Information and Communications Technology and Engineering',
        status: DIVISION_STATUS.ACTIVE
    },
    {
        id: divId2,
        code: 'NAHS',
        name: 'Nursing & Allied Health Sciences',
        status: DIVISION_STATUS.ACTIVE
    },
    {
        id: divId3,
        code: 'AB',
        name: 'Accountancy and Business',
        status: DIVISION_STATUS.ACTIVE
    }
]

const depId1 = faker.string.uuid()
const depId2 = faker.string.uuid()
const depId3 = faker.string.uuid()
const depId4 = faker.string.uuid()
const depId5 = faker.string.uuid()
const depId6 = faker.string.uuid()

export const departments: IDepartment[] = [
    {
        id: depId1,
        division_id: divId1,
        code: 'BSIT',
        name: 'Bachelor of Science in Information Technology',
        status: DEPARTMENT_STATUS.ACTIVE
    },
    {
        id: depId2,
        division_id: divId1,
        code: 'BSCS',
        name: 'Bachelor of Science in Computer Science',
        status: DEPARTMENT_STATUS.ACTIVE
    },
    {
        id: depId3,
        division_id: divId2,
        code: 'BSN',
        name: 'Bachelor of Science in Nursing',
        status: DEPARTMENT_STATUS.ACTIVE
    },
    {
        id: depId4,
        division_id: divId2,
        code: 'Midwifery',
        name: '2-Year Diploma in Midwifery',
        status: DEPARTMENT_STATUS.ACTIVE
    },
    {
        id: depId5,
        division_id: divId3,
        code: 'BSA',
        name: 'Bachelor of Science in Accountancy',
        status: DEPARTMENT_STATUS.ACTIVE
    },
    {
        id: depId6,
        division_id: divId3,
        code: 'BSBA',
        name: 'Bachelor of Science in Business Administration',
        status: DEPARTMENT_STATUS.ACTIVE
    }
]

export const classifications: IClassification[] = [
    {
        id: faker.string.uuid(),
        name: 'Classification 1'
    },
    {
        id: faker.string.uuid(),
        name: 'Classification 2'
    },
    {
        id: faker.string.uuid(),
        name: 'Classification 3'
    }
]


export const units: IUnit[] = [
    {
        id: faker.string.uuid(),
        name: 'Pieces'
    },
    {
        id: faker.string.uuid(),
        name: 'Cartons'
    },
    {
        id: faker.string.uuid(),
        name: 'Pallets'
    }
]


export const brands: IBrand[] = [
    {
        id: faker.string.uuid(),
        name: 'Brand X'
    },
    {
        id: faker.string.uuid(),
        name: 'Brand Y'
    },
    {
        id: faker.string.uuid(),
        name: 'Brand Z'
    } 
]

export const employees: IEmployee[] = [
    {
        id: faker.string.uuid(),
        department_id: depId1,
        firstname: 'Joshua',
        middlename: 'X',
        lastname: 'Tayag',
        position: EMPLOYEE_POSITION.ADMIN,
    },
    {
        id: faker.string.uuid(),
        department_id: depId2,
        firstname: 'Joseph Ken',
        middlename: 'X',
        lastname: 'Estrera',
        position: EMPLOYEE_POSITION.WAREHOUSE_OPERATOR,
    },
    {
        id: faker.string.uuid(),
        department_id: depId3,
        firstname: 'Hannah Grace',
        middlename: 'Bioco',
        lastname: 'Tudio',
        position: EMPLOYEE_POSITION.AUDIT,
    }
]