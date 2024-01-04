import { Injectable } from '@nestjs/common';
import { Supplier } from './entities/supplier.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class SupplierService {

    async findAll(): Promise<Supplier[]>{

        const supplier = new Supplier()
        supplier.id = faker.string.uuid()
        supplier.name = 'Robinson'
        supplier.contact = faker.phone.number()

        return [supplier]

    }

}
