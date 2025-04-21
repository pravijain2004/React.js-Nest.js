import { Body, Controller, Get, Post, Req } from '@nestjs/common';

@Controller('/login')
export class AppController {
  @Post('/login')
  addLogin(@Body() requestData:Record<string, any>) {
    console.log(requestData);
    return{ Success: true};
  }
}
