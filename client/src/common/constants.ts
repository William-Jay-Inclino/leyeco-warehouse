import { DEPARTMENT_STATUS } from "./entities/common.enums"

export const routeNames = {
    dashboard: 'dashboard.route',
    login: 'login.route',
    home: 'home.route',
    purchasing_canvass: 'purchasing_canvass.route',
    purchasing_canvass_form: 'purchasing_canvass_form.route',
}


export const departmentStatus = {
    [DEPARTMENT_STATUS.ACTIVE]: {
        value: DEPARTMENT_STATUS.ACTIVE,
        label: 'Active',
        color: 'success',
    },
    [DEPARTMENT_STATUS.INACTIVE]: {
        value: DEPARTMENT_STATUS.INACTIVE,
        label: 'Inactive',
        color: 'danger',
    }
}

export const divisionStatus = {
    [DEPARTMENT_STATUS.ACTIVE]: {
        value: DEPARTMENT_STATUS.ACTIVE,
        label: 'Active',
        color: 'success',
    },
    [DEPARTMENT_STATUS.INACTIVE]: {
        value: DEPARTMENT_STATUS.INACTIVE,
        label: 'Inactive',
        color: 'danger',
    }
}