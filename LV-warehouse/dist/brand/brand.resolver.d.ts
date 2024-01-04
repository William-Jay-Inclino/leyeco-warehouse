import { BrandService } from './brand.service';
import { Brand } from './entities/brand.entity';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
export declare class BrandResolver {
    private readonly brandService;
    constructor(brandService: BrandService);
    brands(): Promise<Brand[]>;
    brand(id: string): Promise<Brand>;
    createBrand(createBrandInput: CreateBrandInput): Promise<Brand>;
    updateBrand(id: string, updateBrandInput: UpdateBrandInput): Promise<Brand>;
    removeBrand(id: string): Promise<boolean>;
}
