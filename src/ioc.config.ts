import * as fs from "fs";
import { Container } from "inversify";
import { config } from "./config";

const iocContainer = new Container();
// Constants
// iocContainer
//   .bind<MongoConnectionService>(ServicesTypes.MongoConnectionService)
//   .toConstantValue(new MongoConnectionService(config.MONGO_CONNECTION_STRING));

// // Resources
// iocContainer
//   .bind<ITodoResource>(ResourcesTypes.ITodoResource)
//   .to(TodoMongoResource);
// // iocContainer.bind<ITodoResource>(ResourcesTypes.ITodoResource).to(TodoFsResource);
// iocContainer
//   .bind<UserFsResource>(ResourcesTypes.UserResource)
//   .to(UserFsResource);

// // Services
// iocContainer.bind<TodoService>(ServicesTypes.TodoService).to(TodoService);
// iocContainer.bind<UserService>(ServicesTypes.UserService).to(UserService);
// iocContainer.bind<TokenService>(ServicesTypes.TokenService).to(TokenService);

export { iocContainer };
