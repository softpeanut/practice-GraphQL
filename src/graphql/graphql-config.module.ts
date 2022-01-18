import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ProductModule } from "src/product/product.module";

@Module({
  imports: [
      GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
          include: [ProductModule]
      })
  ]  
})
export class GraphQLConfigModule {}