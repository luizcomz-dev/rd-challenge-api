import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LaunchesController } from './launches.controller';
import { LaunchesService } from './launches.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        baseURL: `${configService.get('SPACE_X_API_URL')}/launches`,
        headers: {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip, deflate, compress,',
          Accept: 'application/json',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [LaunchesController],
  providers: [LaunchesService],
})
export class LaunchesModule {}
