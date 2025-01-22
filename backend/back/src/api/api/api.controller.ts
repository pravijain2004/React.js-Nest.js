import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
    @Get('message')
    getMessage() {
        return { message: 'Hello from Nest.js API!' };
    }
}
