import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('all')
  findAll() {
    return `Returns all coffees.`;
  }

  @Get(':id')
  findOne(@Param() params) {
    return `Returns ${params.id}.`;
  }
}
