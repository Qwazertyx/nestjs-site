import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/CreateTest.dto';

@Controller('test')
export class TestController {
	constructor(private testService: TestService) {}

	@Get('/')
	getAllTest(){
		return this.testService.getAllTest();
	}

	@Post('/create')
	@HttpCode(200)
	@UsePipes(ValidationPipe)
	createTest(@Body() testData: CreateTestDto) {
		return {data: testData};
	}
}
