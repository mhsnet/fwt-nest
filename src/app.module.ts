import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import Controllers from './controllers/controllers';

@Module({
  imports: [],
  controllers: Controllers,
  providers: [AppService],
})
export class AppModule {}
