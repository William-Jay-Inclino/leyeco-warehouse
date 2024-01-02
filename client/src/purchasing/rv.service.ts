import { rv_default_approvers } from "../__temp__/data";
import { supervisorLabel } from "../common";
import { APPROVAL_STATUS, IApprover, IRVApproverDefault } from "../common/entities";
import { IItem } from "../common/entities/item.entity";
import { ICreateRVDto } from "./dto/rv.dto";
import { IRV } from "./entities"
import { faker } from '@faker-js/faker';
// import moment from 'moment'
// import * as mock from '../__temp__/data'

class RVService{

    // private endpoint = '/rv/'
    private service = 'RVService: '
    private ctr = 1
    // private today = moment().format('YYYY-MM-DD')

    async findAll(): Promise<IRV[]>{
        return []
    }

    async findOne(id: string): Promise<IRV | null>{
        console.log('id', id)
        const item = {} as IRV 
        return item
    }

    async create(payload: {data: ICreateRVDto}): Promise<IRV | null>{
        console.log(this.service + 'create()', payload)

        const rvId = faker.string.uuid()

        const item = {} as IRV 
        item.canvass = payload.data.canvass
        item.canvass_id = payload.data.canvass.id
        item.date_requested = payload.data.date_requested
        item.id = rvId 
        item.rv_number = '23-0000' + this.ctr
        item.work_order_date = payload.data.work_order_date
        item.work_order_no = payload.data.work_order_no
        item.supervisor_id = payload.data.supervisor.id
        item.supervisor = payload.data.supervisor
        item.is_cancelled = false

        item.items = payload.data.items.map(i => {
            const x = {} as IItem
            x.brand_id = i.brand ? i.brand.id : null
            x.brand = i.brand || null
            x.rv_id = rvId
            x.rv =  item
            x.description = i.description
            x.id = faker.string.uuid()
            x.quantity = i.quantity
            x.unit_id = i.unit!.id
            x.unit = i.unit!
            return x
        }) 

        const defaultApprovers: IRVApproverDefault[] = [...rv_default_approvers]

        const approverSuperior = {} as IRVApproverDefault
        approverSuperior.approver_id = payload.data.supervisor.id
        approverSuperior.id = faker.string.uuid()
        approverSuperior.approver = payload.data.supervisor 
        approverSuperior.label = supervisorLabel
        approverSuperior.order = 1
        defaultApprovers.unshift(approverSuperior)

        const approvers = defaultApprovers.map(i => {
            const x = {} as IApprover 
            x.approver_id = i.approver_id
            // x.date_approval = this.today
            x.id = faker.string.uuid() 
            x.label = i.label 
            x.notes = ''
            x.order = i.order
            x.rv = item 
            x.rv_id = item.id
            x.status = APPROVAL_STATUS.PENDING

            return x 
        })

        item.approvers = approvers
        
        // approvers.forEach(i => mock.approvers.push(i))
        
        this.ctr ++ 

        // RVs.unshift(item)

        return item
    }

    async update(payload: {id: string, data: IRV}): Promise<IRV | null>{
        console.log('payload', payload)
        const item = {} as IRV 
        return item
    }

    async remove(id: string): Promise<boolean> {
        console.log('id', id)
        return true
    }

}

export const rVService = new RVService()