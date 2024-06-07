/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnomalyRuleWhereInput } from "./AnomalyRuleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AnomalyRuleOrderByInput } from "./AnomalyRuleOrderByInput";

@ArgsType()
class AnomalyRuleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnomalyRuleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AnomalyRuleWhereInput, { nullable: true })
  @Type(() => AnomalyRuleWhereInput)
  where?: AnomalyRuleWhereInput;

  @ApiProperty({
    required: false,
    type: [AnomalyRuleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AnomalyRuleOrderByInput], { nullable: true })
  @Type(() => AnomalyRuleOrderByInput)
  orderBy?: Array<AnomalyRuleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AnomalyRuleFindManyArgs as AnomalyRuleFindManyArgs };