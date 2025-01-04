import { Controller, Get, Param } from '@nestjs/common';
import { CollegeService } from './college.service';

@Controller('college_data')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get(':college_id')
  async getCollegeData(@Param('college_id') collegeId: number) {
    const avgSection = await this.collegeService.getAvgPlacementData(collegeId);
    const placementSection = await this.collegeService.getPlacementData(collegeId);
    return { avg_section: avgSection, placement_section: placementSection };
  }
}
