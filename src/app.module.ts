import { Module } from '@nestjs/common';
import { LaunchesModule } from './launches/launches.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LaunchesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
