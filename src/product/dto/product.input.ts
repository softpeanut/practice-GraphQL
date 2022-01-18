import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class InputProduct {
    @Field()
    readonly name!: string;
    
    @Field(() => Int)
    readonly price!: number;
}