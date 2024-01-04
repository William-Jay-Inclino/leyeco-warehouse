import { Injectable } from '@nestjs/common';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { Brand } from './entities/brand.entity';
import { faker } from '@faker-js/faker'

@Injectable()
export class BrandService {

  brands: Brand[] = []

  async create(createBrandInput: CreateBrandInput): Promise<Brand> {
    const brand = {
      id: faker.string.uuid(),
      name: createBrandInput.name
    }
    this.brands.push(brand)
    return brand
  }

  async findAll(): Promise<Brand[]> {
    return this.brands
  }

  async findOne(id: string): Promise<Brand> {
    const brand = this.brands.find(i => i.id === id)
    return brand
  }

  async update(id: string, updateBrandInput: UpdateBrandInput): Promise<Brand> {
    
    const brand = this.brands.find(i => i.id === id)

    brand.name = updateBrandInput.name

    return brand

  }

  async remove(id: string): Promise<boolean> {
    const indx = this.brands.findIndex(i => i.id === id)
    this.brands.splice(indx, 1)
    return true
  }
}
