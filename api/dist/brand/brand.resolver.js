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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const brand_service_1 = require("./brand.service");
const brand_entity_1 = require("./entities/brand.entity");
const create_brand_input_1 = require("./dto/create-brand.input");
const update_brand_input_1 = require("./dto/update-brand.input");
let BrandResolver = class BrandResolver {
    constructor(brandService) {
        this.brandService = brandService;
    }
    brands() {
        return this.brandService.findAll();
    }
    brand(id) {
        return this.brandService.findOne(id);
    }
    createBrand(createBrandInput) {
        return this.brandService.create(createBrandInput);
    }
    updateBrand(id, updateBrandInput) {
        return this.brandService.update(id, updateBrandInput);
    }
    removeBrand(id) {
        return this.brandService.remove(id);
    }
};
exports.BrandResolver = BrandResolver;
__decorate([
    (0, graphql_1.Query)(() => [brand_entity_1.Brand]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BrandResolver.prototype, "brands", null);
__decorate([
    (0, graphql_1.Query)(() => brand_entity_1.Brand),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandResolver.prototype, "brand", null);
__decorate([
    (0, graphql_1.Mutation)(() => brand_entity_1.Brand),
    __param(0, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brand_input_1.CreateBrandInput]),
    __metadata("design:returntype", void 0)
], BrandResolver.prototype, "createBrand", null);
__decorate([
    (0, graphql_1.Mutation)(() => brand_entity_1.Brand),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_brand_input_1.UpdateBrandInput]),
    __metadata("design:returntype", void 0)
], BrandResolver.prototype, "updateBrand", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BrandResolver.prototype, "removeBrand", null);
exports.BrandResolver = BrandResolver = __decorate([
    (0, graphql_1.Resolver)(() => brand_entity_1.Brand),
    __metadata("design:paramtypes", [brand_service_1.BrandService])
], BrandResolver);
//# sourceMappingURL=brand.resolver.js.map