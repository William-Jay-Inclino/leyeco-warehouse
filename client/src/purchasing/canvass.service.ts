import { IItem } from "../common/entities/item.entity";
import { ICreateCanvassDto } from "./dto/canvass.dto";
import { ICanvass } from "./entities"
import { faker } from '@faker-js/faker';
import { canvasses } from "../__temp__/data";

class CanvassService{

    // private endpoint = '/canvass/'
    private service = 'CanvassService: '
    private ctr = 2

    async findAll(): Promise<ICanvass[]>{
        return []
    }

    async findOne(id: string): Promise<ICanvass | null>{
        console.log('id', id)
        const item = {} as ICanvass 
        return item
    }

    async create(payload: {data: ICreateCanvassDto}): Promise<ICanvass | null>{
        console.log(this.service + 'create()', payload)

        const canvassId = faker.string.uuid()

        const item = {} as ICanvass 
        item.id = canvassId
        item.date_requested = payload.data.date_requested
        item.noted_by = payload.data.noted_by!
        item.notes = payload.data.notes 
        item.purpose = payload.data.purpose
        item.rc_number = '23-0000' + this.ctr
        item.requested_by = payload.data.requested_by!
        
        item.items = payload.data.items.map(i => {
            const x = {} as IItem
            x.brand_id = i.brand ? i.brand.id : null
            x.brand = i.brand || null
            x.canvass_id = canvassId
            x.canvass = item 
            x.description = i.description
            x.id = faker.string.uuid()
            x.quantity = i.quantity
            x.unit_id = i.unit!.id
            x.unit = i.unit!
            return x
        }) 

        this.ctr ++ 

        canvasses.unshift(item)

        return item
    }

    async update(payload: {id: string, data: ICanvass}): Promise<ICanvass | null>{
        console.log('payload', payload)
        const item = {} as ICanvass 
        return item
    }

    async remove(id: string): Promise<boolean> {
        console.log('id', id)
        return true
    }

}

export const canvassService = new CanvassService()