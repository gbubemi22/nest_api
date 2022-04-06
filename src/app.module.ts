import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.models';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://testboy:shadow22@bemiho22.qq4js.mongodb.net/nestTest',
    ),
    MongooseModule.forFeature([{name:'user', schema:UserSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
