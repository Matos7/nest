import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  @Post()
  create(@Body() body){
    return `name: ${body.name}, age: ${body.age}.`;
  }
}
