import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('all')
  @HttpCode(HttpStatus.OK)
  findAll(@Res() response) {
    response.send(`Returns all coffees.`);
  }

  @Get(':id')
  findOne(@Param() params) {
    return `Returns ${params.id}.`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return `name: ${body.name}, age: ${body.age}.`;
  }
}
