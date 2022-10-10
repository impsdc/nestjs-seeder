import { seeder } from 'nestjs-seeder-impsdc';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schemas/user.schema';
import { UsersSeeder } from './seeders/users.seeder';

seeder({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ludu:B4ex4CKGH!t4M&CA@cluster0.lyfb9.mongodb.net/ludu-production?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
}).run([UsersSeeder]);
