import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CollegeService } from './college.service';

@ApiTags('Colleges') // Group this controller under 'Colleges'
@Controller('college_data')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get(':college_id')
  @ApiParam({ name: 'college_id', type: Number, description: 'ID of the college' })
  @ApiResponse({ status: 200, description: 'Returns college placement data' })
  async getCollegeData(@Param('college_id') collegeId: number) {
    const avgSection = await this.collegeService.getAvgPlacementData(collegeId);
    const placementSection = await this.collegeService.getPlacementData(collegeId);
    return { avg_section: avgSection, placement_section: placementSection };
  }
}
