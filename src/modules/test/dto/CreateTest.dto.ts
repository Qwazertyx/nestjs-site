import { IsNotEmpty, Length, isNotEmpty } from "class-validator";

export class CreateTestDto {

	@IsNotEmpty({message: 'the test should have a title'})
	@Length(3, 255)
	title: string;

	@IsNotEmpty({message: 'the test should have a description'})
	@Length(3, 255)
	description: string;
}