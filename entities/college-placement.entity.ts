import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('college_placement')
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  collegeId: number;

  @Column()
  year: number;

  @Column('float')
  highestPlacement: number;

  @Column('float')
  averagePlacement: number;

  @Column('float')
  medianPlacement: number;

  @Column('float')
  placementRate: number;
}
