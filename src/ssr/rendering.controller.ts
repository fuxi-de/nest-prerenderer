import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { RenderingService } from './rendering.service';

@Controller('/')
export class RenderingController {
  constructor(private readonly renderingService: RenderingService) {}

  @Get()
  async getPrerenderedPage(@Res() res: Response): Promise<Response> {
    const prerenderedPage = await this.renderingService.render(
      'https://google.de',
    );
    return res.send(prerenderedPage);
  }
}
