import { Module } from '@nestjs/common';
import { RenderingController } from './ssr/rendering.controller';
import { RenderingService } from './ssr/rendering.service';
import { PuppeteerModule } from 'nest-puppeteer';

@Module({
  imports: [PuppeteerModule.forRoot()],
  controllers: [RenderingController],
  providers: [RenderingService],
})
export class AppModule {}
