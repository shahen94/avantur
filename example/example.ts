import { Compiler, Injectable, Module } from "../di";

@Injectable()
class AuthService {
  getAll() {
    return 'Hello World';
  }
}

@Injectable()
class UsersService {
  constructor(private authService: AuthService) {}

  test() {
    return this.authService.getAll();
  }
}

@Module({
  providers: [UsersService]
})
class UsersModule {}

@Module({
  imports: [UsersModule],
  providers: [AuthService]
})
export class AppModule {}


const moduleRef = Compiler.compile(AppModule);

const instance = moduleRef.get<UsersService>(UsersService);

console.log(instance.test());
