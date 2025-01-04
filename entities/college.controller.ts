import { Controller, Get, Param } from '@nestjs/common';
import { CollegeService } from './college.service';

@Controller('college_data')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get(':college_id')
  getPlacementData(@Param('college_id') collegeId: number) {
    return this.collegeService.getPlacementData(collegeId);
  }
}
