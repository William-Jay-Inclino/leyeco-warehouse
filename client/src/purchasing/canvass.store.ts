
import { defineStore } from 'pinia'
import { ICanvassItemDto, ICreateCanvassDto, IFormData, IUpdateCanvassDto } from './dto/canvass.dto'
import { computed, ref } from 'vue'
import { ICanvass } from './entities'
import { IBrand, IEmployee, IUnit } from '../common/entities'
import moment from 'moment'
import { convertMiddleNameToInitial } from '../common'

export const canvassStore = defineStore('canvass', () => {

    const _store = 'canvassStore: '
    const today = moment().format('YYYY-MM-DD')

    const _formDataInitial: IFormData = {
        id: '',
        date_requested: today,
        purpose: '',
        notes: '',
        requested_by: null,
        noted_by: null,
        items: [],
    }

    const _formErrorsInitial = {
        date_requested: false,
        purpose: false,
        notes: false,
        requested_by: false,
        noted_by: false,
        items: false,
    }
    
    // state
    const formData = ref({..._formDataInitial});
    const formErrors = ref({..._formErrorsInitial})
    const _items = ref<ICanvass[]>([])
    const _units = ref<IUnit[]>([])
    const _brands = ref<IBrand[]>([])
    const _employees = ref<IEmployee[]>([])

    // onMounted( async() => {
    //     console.log(_store + 'onMounted()')
    //     const items = await bartService.findAll()
    //     setBarts(items)
    // })

    // getters 
    const items = computed( () => _items.value)
    const units = computed( () => _units.value)
    const brands = computed( () => _brands.value)
    const employees = computed( () => _employees.value)

    const formIsEditMode = computed( (): boolean => false)

    // setters 

    const setUnits = (items: IUnit[]) => {
        console.log(_store + 'setUnits()', items)
        _units.value = items
    }

    const setBrands = (items: IUnit[]) => {
        console.log(_store + 'setBrands()', items)
        _brands.value = items
    }

    const setEmployees = (items: IEmployee[]) => {
        console.log(_store + 'setEmployees()', items)
        _employees.value = items.map(obj => ({ ...obj, label: `${obj.lastname}, ${obj.firstname} ${convertMiddleNameToInitial(obj.middlename)}` }));
    }

    // const setBarts = (items: IBART[]) => {
    //     console.log(_store + 'setBarts()', items)
    //     _barts.value = items
    // }

    // const setFormData = (payload: {data: IBART}) => {
    //     console.log(_store + 'setFormData()', payload)
    //     formData.value = payload.data
    // }

    // // methods

    // const initUpdateFormData = async(id: string) => {
    //     console.log(_store + 'initUpdateFormData()', id)
    //     const itemFound = await bartService.findOne(id)
    //     if(itemFound){
    //         setFormData({data: itemFound})
    //     }
    // }

    const onCreate = async(payload: {data: ICreateCanvassDto}): Promise<ICanvass | null> => {
        console.log(_store + 'onCreate()', payload)
        return null
    }

    const onUpdate = async(payload: {data: IUpdateCanvassDto}): Promise<ICanvass | null> => {
        console.log(_store + 'onUpdate()', payload)
        return null

    }

    const onAddItem = (payload: {data: ICanvassItemDto}) => {
        console.log(_store + 'onAddItem()', payload)
        formData.value.items.push(payload.data)
    }

    const onRemoveItem = (payload: {indx: number}) => {
        console.log(_store + 'onAddItem()', payload)
        formData.value.items.splice(payload.indx, 1)
    }

    // const onDelete = async(id: string): Promise<boolean> => {
    //     console.log(_store + 'onDelete()', id)

    //     const indx = _barts.value.findIndex(i => i.id === id)

    //     if(indx === -1){
    //         console.error('Item not found')
    //         return false 
    //     }

    //     const deleted = await bartService.remove(id)

    //     if(deleted){
    //         _barts.value.splice(indx, 1)
    //         return true
    //     }

    //     return false 

    // }

    // const resetFormData = () => {
    //     console.log(_store + 'resetForm()')
    //     formData.value = {..._formDataInitial}
    //     formErrors.value = {..._formErrorsInitial}
    // }

    return {
        items,
        formData,
        formErrors,
        formIsEditMode,
        units,
        brands,
        employees,
        onCreate,
        onUpdate,
        onAddItem,
        onRemoveItem,
        setUnits,
        setBrands,
        setEmployees,
        // onSubmit,
        // onDelete,
        // resetFormData,
        // setFormData,
        // initUpdateFormData,
    }
})



