import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { Dilbs } from 'src/entities/dilbs.entity';
import { Notices } from 'src/entities/notice.entity';
import { Posts } from 'src/entities/posts.entity';
import { Reviews } from 'src/entities/review.entity';
import { Users } from 'src/entities/user.entity';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'nest-test-db',
  entities: [Users, Posts, Reviews, Dilbs, Notices],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
