"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const faker_1 = require("@faker-js/faker");
let BrandService = class BrandService {
    constructor() {
        this.brands = [];
    }
    async create(createBrandInput) {
        const brand = {
            id: faker_1.faker.string.uuid(),
            name: createBrandInput.name
        };
        this.brands.push(brand);
        return brand;
    }
    async findAll() {
        return this.brands;
    }
    async findOne(id) {
        const brand = this.brands.find(i => i.id === id);
        return brand;
    }
    async update(id, updateBrandInput) {
        const brand = this.brands.find(i => i.id === id);
        brand.name = updateBrandInput.name;
        return brand;
    }
    async remove(id) {
        const indx = this.brands.findIndex(i => i.id === id);
        this.brands.splice(indx, 1);
        return true;
    }
};
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)()
], BrandService);
//# sourceMappingURL=brand.service.js.map