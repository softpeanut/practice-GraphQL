import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { InputProduct } from './dto/product.input';

@Resolver('Product')
export class ProductResolver {
    constructor( 
        private readonly productService: ProductService,
    ) {}

    @Mutation(() => ProductDto ) 
    async createProduct(@Args('data') data: InputProduct) {
        return await this.productService.createProduct(data);
    }

    @Query(returns => [ ProductDto ]) 
    async getProducts() {
        return await this.productService.getProducts();
    }

    @Query(() => ProductDto)
    async getProduct(@Args('id') id: number) {
        return await this.productService.getProduct(id);
    }

}
