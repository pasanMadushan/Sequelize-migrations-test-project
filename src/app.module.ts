/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pasan1998',
    database: 'library',
    autoLoadModels: true,
    synchronize: true
  }), LibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
