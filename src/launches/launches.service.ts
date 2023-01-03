import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class LaunchesService {
  private readonly logger = new Logger(LaunchesService.name);

  constructor(private readonly httpService: HttpService) {}

  getNext(): Promise<object[]> {
    return this.httpService.axiosRef
      .get('/next')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.logger.error(error);
        return {
          status: 500,
          message: 'Ocorreu um erro ao tentar buscar o próximo lançamento',
          error: `[${LaunchesService.name}] - ${error.message}`,
        };
      });
  }

  getLatest(): Promise<object[]> {
    return this.httpService.axiosRef
      .get('/latest')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.logger.error(error);
        return {
          status: 500,
          message: 'Ocorreu um erro buscar o último lançamento',
          error: `[${LaunchesService.name}] - ${error.message}`,
        };
      });
  }

  getUpcoming(): Promise<object[]> {
    return this.httpService.axiosRef
      .get('/upcoming')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.logger.error(error);
        return {
          status: 500,
          message: 'Ocorreu um erro ao tentar buscar os próximos lançamentos',
          error: `[${LaunchesService.name}] - ${error.message}`,
        };
      });
  }

  getPast(): Promise<object[]> {
    return this.httpService.axiosRef
      .get('/past')
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.logger.error(error);
        return {
          status: 500,
          message: 'Ocorreu um erro ao tentar buscar os lançamentos passados',
          error: `[${LaunchesService.name}] - ${error.message}`,
        };
      });
  }
}
