import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
	@Get('/')
	getAllTest(){
		return [1, 2, 3];
	}
}
