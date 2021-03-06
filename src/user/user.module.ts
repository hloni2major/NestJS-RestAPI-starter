import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './models/user.model'
import { SharedModule } from '../shared/shared.module'

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.modelName, schema: User.model.schema}]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
