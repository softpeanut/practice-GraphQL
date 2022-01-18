import { Module } from '@nestjs/common';
import 'dotenv/config';
import { ProductModule } from './product/product.module';
import { TypeOrmConfigModule } from './typeorm/typeorm-config.module';
import { GraphQLConfigModule } from './graphql/graphql-config.module';

@Module({
  imports: [
    GraphQLConfigModule,
    TypeOrmConfigModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}