import { Injectable } from '@nestjs/common';

/* 
● Próximo lançamento;
● Último lançamento;
● Próximos lançamentos;
● Lançamentos passados;
*/

@Injectable()
export class LaunchesService {
  getNext() {
    return 'Get next launch';
  }

  getLatest() {
    return 'Get latest launch';
  }

  getUpcoming() {
    return 'Get all upcoming launches';
  }

  getPast() {
    return 'Get all past launches';
  }
}
