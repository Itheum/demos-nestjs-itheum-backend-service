import { Injectable } from '@nestjs/common';
import { DataNftMarket } from '@itheum/sdk-mx-data-nft';

@Injectable()
export class MarketService {
  async getOffers(network: string) {
    const dataNftMarket = new DataNftMarket(network);
    const offers = await dataNftMarket.viewPagedOffers(1, 10);

    return offers;
  }
}
