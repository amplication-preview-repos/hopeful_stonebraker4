/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { NetworkEventService } from "../networkEvent.service";
import { NetworkEventCreateInput } from "./NetworkEventCreateInput";
import { NetworkEvent } from "./NetworkEvent";
import { NetworkEventFindManyArgs } from "./NetworkEventFindManyArgs";
import { NetworkEventWhereUniqueInput } from "./NetworkEventWhereUniqueInput";
import { NetworkEventUpdateInput } from "./NetworkEventUpdateInput";
import { AlertFindManyArgs } from "../../alert/base/AlertFindManyArgs";
import { Alert } from "../../alert/base/Alert";
import { AlertWhereUniqueInput } from "../../alert/base/AlertWhereUniqueInput";

export class NetworkEventControllerBase {
  constructor(protected readonly service: NetworkEventService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: NetworkEvent })
  async createNetworkEvent(
    @common.Body() data: NetworkEventCreateInput
  ): Promise<NetworkEvent> {
    return await this.service.createNetworkEvent({
      data: data,
      select: {
        createdAt: true,
        destinationIp: true,
        destinationPort: true,
        id: true,
        payload: true,
        protocol: true,
        sourceIp: true,
        sourcePort: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [NetworkEvent] })
  @ApiNestedQuery(NetworkEventFindManyArgs)
  async networkEvents(@common.Req() request: Request): Promise<NetworkEvent[]> {
    const args = plainToClass(NetworkEventFindManyArgs, request.query);
    return this.service.networkEvents({
      ...args,
      select: {
        createdAt: true,
        destinationIp: true,
        destinationPort: true,
        id: true,
        payload: true,
        protocol: true,
        sourceIp: true,
        sourcePort: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: NetworkEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async networkEvent(
    @common.Param() params: NetworkEventWhereUniqueInput
  ): Promise<NetworkEvent | null> {
    const result = await this.service.networkEvent({
      where: params,
      select: {
        createdAt: true,
        destinationIp: true,
        destinationPort: true,
        id: true,
        payload: true,
        protocol: true,
        sourceIp: true,
        sourcePort: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: NetworkEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateNetworkEvent(
    @common.Param() params: NetworkEventWhereUniqueInput,
    @common.Body() data: NetworkEventUpdateInput
  ): Promise<NetworkEvent | null> {
    try {
      return await this.service.updateNetworkEvent({
        where: params,
        data: data,
        select: {
          createdAt: true,
          destinationIp: true,
          destinationPort: true,
          id: true,
          payload: true,
          protocol: true,
          sourceIp: true,
          sourcePort: true,
          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: NetworkEvent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteNetworkEvent(
    @common.Param() params: NetworkEventWhereUniqueInput
  ): Promise<NetworkEvent | null> {
    try {
      return await this.service.deleteNetworkEvent({
        where: params,
        select: {
          createdAt: true,
          destinationIp: true,
          destinationPort: true,
          id: true,
          payload: true,
          protocol: true,
          sourceIp: true,
          sourcePort: true,
          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/alerts")
  @ApiNestedQuery(AlertFindManyArgs)
  async findAlerts(
    @common.Req() request: Request,
    @common.Param() params: NetworkEventWhereUniqueInput
  ): Promise<Alert[]> {
    const query = plainToClass(AlertFindManyArgs, request.query);
    const results = await this.service.findAlerts(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        networkEvent: {
          select: {
            id: true,
          },
        },

        severity: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/alerts")
  async connectAlerts(
    @common.Param() params: NetworkEventWhereUniqueInput,
    @common.Body() body: AlertWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      alerts: {
        connect: body,
      },
    };
    await this.service.updateNetworkEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/alerts")
  async updateAlerts(
    @common.Param() params: NetworkEventWhereUniqueInput,
    @common.Body() body: AlertWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      alerts: {
        set: body,
      },
    };
    await this.service.updateNetworkEvent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/alerts")
  async disconnectAlerts(
    @common.Param() params: NetworkEventWhereUniqueInput,
    @common.Body() body: AlertWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      alerts: {
        disconnect: body,
      },
    };
    await this.service.updateNetworkEvent({
      where: params,
      data,
      select: { id: true },
    });
  }
}