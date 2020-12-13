import "reflect-metadata";

import {
  controller,
  httpGet,
  InversifyExpressServer
} from "inversify-express-utils";

import { Container } from "inversify";

@controller("*")
class NotFoundController {
  @httpGet("/")
  public async index() {
    return Promise.resolve("not found!");
  }
}

@controller("/")
class HomeControllee {
  @httpGet("/")
  public index() {
    return Promise.resolve("home!");
  }
}

const container = new Container();
const server = new InversifyExpressServer(container);
const app = server.build();

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
