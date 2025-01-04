import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('college_wise_course')
export class CollegeWiseCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  collegeId: number;

  @Column()
  courseName: string;

  @Column('int')
  courseDuration: number; // In months

  @Column('float')
  courseFee: number;
}
