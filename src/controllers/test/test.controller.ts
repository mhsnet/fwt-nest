import { Controller, Body , HttpCode, Param, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserTestDto } from './dto/dto';

@Controller('test')
export class TestController {
  @Get("hello")
  hello(@Req() request: Request): string {
    //console.log(request);
    return 'Hello Nest Framework Test';
  }

  //路由参数
  @Get('/param/:name/:age')
  getParam(@Param() userTestDto: UserTestDto): UserTestDto {
    return userTestDto;
  }
  //请求负载
  //Content-Type设置为application/x-www-form-urlencoded
  @Post('/param')
  postParam(@Body() userTestDto: UserTestDto): UserTestDto {
    return userTestDto;
  }

  @Get()
  @HttpCode(405)
  gothers(): string {
    return '405';
  }

  @Get("*")
  @HttpCode(404)
  others(): string {
    return '404';
  }
}
