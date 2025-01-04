import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { College } from './entities/college.entity';
import { CollegePlacement } from './entities/college-placement.entity';
import { CollegeWiseCourse } from './entities/college-wise-course.entity';
import { City } from './entities/city.entity';
import { State } from './entities/state.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [College, CollegePlacement, CollegeWiseCourse, City, State],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([College, CollegePlacement, CollegeWiseCourse, City, State]),
  ],
})
export class AppModule {}
