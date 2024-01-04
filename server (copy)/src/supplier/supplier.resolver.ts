import { Query, Resolver } from '@nestjs/graphql';
import { SupplierService } from './supplier.service';
import { Supplier } from './entities/supplier.entity';

@Resolver(of => Supplier)
export class SupplierResolver {
    constructor(private supplierService: SupplierService){}

    @Query(returns => [Supplier])
    suppliers(): Promise<Supplier[]>{
        return this.supplierService.findAll()
    }

}
