import { Controller, Get, Query } from '@nestjs/common';
import { MarketService } from './market.service';

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Get()
  async getOffers(@Query('network') network: string) {
    return await this.marketService.getOffers(network);
  }
}
