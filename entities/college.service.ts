import { Injectable } from '@nestjs/common';

@Injectable()
export class CollegeService {
  async getPlacementData(collegeId: number) {

    return {
      collegeId,
      placements: [],
    };
  }
}
