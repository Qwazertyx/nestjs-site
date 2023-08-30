import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';
import { TestController } from './modules/test/test.controller';

@Module({
  imports : [TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
