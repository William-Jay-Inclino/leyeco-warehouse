
import { defineStore } from 'pinia'
import { IBrand, IClassification, IDepartment, IDivision, IEmployee, ISupplier, IUnit } from '../common/entities';
import { ref } from 'vue';
import * as mock from './data';

export const tempStore = defineStore('temp', () => {

    // state
    const suppliers = ref<ISupplier[]>([...mock.suppliers])
    const departments = ref<IDepartment[]>([...mock.departments])
    const divisions = ref<IDivision[]>([...mock.divisions])
    const classifications = ref<IClassification[]>([...mock.classifications])
    const units = ref<IUnit[]>([...mock.units])
    const brands = ref<IBrand[]>([...mock.brands])
    const employees = ref<IEmployee[]>([...mock.employees])

    return {
        suppliers,
        departments,
        divisions,
        classifications,
        units,
        brands,
        employees,
    }
})



