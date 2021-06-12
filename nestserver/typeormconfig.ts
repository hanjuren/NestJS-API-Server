import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { Posts } from 'src/entities/posts.entity';
import { Users } from 'src/entities/user.entity';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'nest-test-db',
  entities: [Users, Posts],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
