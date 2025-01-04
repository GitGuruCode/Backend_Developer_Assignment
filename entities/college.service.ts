import { Injectable } from '@nestjs/common';

@Injectable()
export class CollegeService {
  async getPlacementData(collegeId: number) {
    // Example response: Replace with actual database logic later
    return {
      collegeId,
      placements: [],
    };
  }
}
