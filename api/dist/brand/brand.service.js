"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BrandService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
let BrandService = BrandService_1 = class BrandService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_2.Logger(BrandService_1.name);
    }
    async create(createBrandInput) {
        try {
            return await this.prisma.brand.create({
                data: { ...createBrandInput }
            });
        }
        catch (error) {
            this.logger.error(`Failed to create brand: ${error.message}`);
            throw new common_1.InternalServerErrorException('Failed to create brand');
        }
    }
    async findAll() {
        return await this.prisma.brand.findMany({
            where: {
                is_deleted: false
            }
        });
    }
    async findOne(id) {
        return await this.prisma.brand.findUniqueOrThrow({
            where: { id, is_deleted: false }
        });
    }
    async update(id, updateBrandInput) {
        await this.findOne(id);
        return await this.prisma.brand.update({
            where: { id },
            data: { ...updateBrandInput }
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.brand.update({
            where: { id },
            data: {
                is_deleted: true
            }
        });
        return true;
    }
};
exports.BrandService = BrandService;
exports.BrandService = BrandService = BrandService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BrandService);
//# sourceMappingURL=brand.service.js.map