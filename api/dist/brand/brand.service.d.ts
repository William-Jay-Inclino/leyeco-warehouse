import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { Brand } from './entities/brand.entity';
import { PrismaService } from '../prisma/prisma.service';
export declare class BrandService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    create(createBrandInput: CreateBrandInput): Promise<Brand>;
    findAll(): Promise<Brand[]>;
    findOne(id: string): Promise<Brand>;
    update(id: string, updateBrandInput: UpdateBrandInput): Promise<Brand>;
    remove(id: string): Promise<boolean>;
}
