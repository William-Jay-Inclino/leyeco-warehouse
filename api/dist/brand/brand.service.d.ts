import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { Brand } from './entities/brand.entity';
export declare class BrandService {
    brands: Brand[];
    create(createBrandInput: CreateBrandInput): Promise<Brand>;
    findAll(): Promise<Brand[]>;
    findOne(id: string): Promise<Brand>;
    update(id: string, updateBrandInput: UpdateBrandInput): Promise<Brand>;
    remove(id: string): Promise<boolean>;
}
