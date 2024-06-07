/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AnomalyRule as PrismaAnomalyRule } from "@prisma/client";

export class AnomalyRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AnomalyRuleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.anomalyRule.count(args);
  }

  async anomalyRules<T extends Prisma.AnomalyRuleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnomalyRuleFindManyArgs>
  ): Promise<PrismaAnomalyRule[]> {
    return this.prisma.anomalyRule.findMany<Prisma.AnomalyRuleFindManyArgs>(
      args
    );
  }
  async anomalyRule<T extends Prisma.AnomalyRuleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnomalyRuleFindUniqueArgs>
  ): Promise<PrismaAnomalyRule | null> {
    return this.prisma.anomalyRule.findUnique(args);
  }
  async createAnomalyRule<T extends Prisma.AnomalyRuleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnomalyRuleCreateArgs>
  ): Promise<PrismaAnomalyRule> {
    return this.prisma.anomalyRule.create<T>(args);
  }
  async updateAnomalyRule<T extends Prisma.AnomalyRuleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnomalyRuleUpdateArgs>
  ): Promise<PrismaAnomalyRule> {
    return this.prisma.anomalyRule.update<T>(args);
  }
  async deleteAnomalyRule<T extends Prisma.AnomalyRuleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnomalyRuleDeleteArgs>
  ): Promise<PrismaAnomalyRule> {
    return this.prisma.anomalyRule.delete(args);
  }
}