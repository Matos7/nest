import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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
  create(@Body() body) {
    return `name: ${body.name}, age: ${body.age}.`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Updating ${id} coffee.`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Removing ${id} coffee.`;
  }
}
