import { Controller, Get, Version } from '@nestjs/common';
import { LaunchesService } from './launches.service';

/* 
● Próximo lançamento;
● Último lançamento;
● Próximos lançamentos;
● Lançamentos passados;
*/

@Controller('launches')
export class LaunchesController {

  constructor(private lauchesService: LaunchesService) {}

  @Version('1')
  @Get('next')
  getNext() {
    return this.lauchesService.getNext();
  }

  @Version('1')
  @Get('latest')
  getLatest() {
    return this.lauchesService.getLatest();
  }

  @Version('1')
  @Get('upcoming')
  getUpcoming() {
    return this.lauchesService.getUpcoming();
  }

  @Version('1')
  @Get('past')
  getPast() {
    return this.lauchesService.getPast();
  }

}
