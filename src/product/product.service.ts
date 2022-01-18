import { Injectable } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { ProductDto } from './dto/product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) {}

    async createProduct(data: ProductDto) {
        return await this.productRepository.create(data).save();
    }

    async getProduct(id: number) {
        return await this.productRepository.findOne(id);
    }

    async getProducts() {
        return await this.productRepository.find();
    }
}
