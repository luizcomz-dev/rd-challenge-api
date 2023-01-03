import { Controller, Get, Version } from '@nestjs/common';
import { LaunchesService } from './launches.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('launches')
@ApiTags('Launches')
export class LaunchesController {

  constructor(private lauchesService: LaunchesService) {}

  @Version('1')
  @Get('next')
  @ApiOperation({ summary: 'Próximo lançamento' })
  getNext() {
    return this.lauchesService.getNext();
  }

  @Version('1')
  @Get('latest')
  @ApiOperation({ summary: 'Último lançamento' })
  getLatest() {
    return this.lauchesService.getLatest();
  }

  @Version('1')
  @Get('upcoming')
  @ApiOperation({ summary: 'Próximos lançamentos' })
  getUpcoming() {
    return this.lauchesService.getUpcoming();
  }

  @Version('1')
  @Get('past')
  @ApiOperation({ summary: 'Últimos lançamentos' })
  getPast() {
    return this.lauchesService.getPast();
  }

}
