import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get(`flavors`)
  findFlavors() {
    return `Returns flavors.`;
  }

  @Get(`all`)
  findAll() {
    return `Returns all coffees.`;
  }
}
