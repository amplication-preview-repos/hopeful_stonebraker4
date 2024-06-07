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
import { AnomalyRuleWhereUniqueInput } from "./AnomalyRuleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AnomalyRuleUpdateInput } from "./AnomalyRuleUpdateInput";

@ArgsType()
class UpdateAnomalyRuleArgs {
  @ApiProperty({
    required: true,
    type: () => AnomalyRuleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AnomalyRuleWhereUniqueInput)
  @Field(() => AnomalyRuleWhereUniqueInput, { nullable: false })
  where!: AnomalyRuleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AnomalyRuleUpdateInput,
  })
  @ValidateNested()
  @Type(() => AnomalyRuleUpdateInput)
  @Field(() => AnomalyRuleUpdateInput, { nullable: false })
  data!: AnomalyRuleUpdateInput;
}

export { UpdateAnomalyRuleArgs as UpdateAnomalyRuleArgs };
