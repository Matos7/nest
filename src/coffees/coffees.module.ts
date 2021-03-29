import { Event } from './../events/entities/event.entity';
import { Flavor } from './entities/flavor.entity';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';

export class MockCoffeesService {}

@Module({
  providers: [
    {
      provide: CoffeesService,
      useValue: new MockCoffeesService(), // <-- mock implementation
    },
  ],
})
export class CoffeesModule {}
