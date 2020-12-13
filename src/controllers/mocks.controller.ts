import { controller, httpGet } from "inversify-express-utils";
import {Request, Response} from 'express';

const map = new Map<string | RegExp, any>();
map.set("/test", { body: { data: { age: 28 } }, status: 200 });

@controller("*")
class MocksController {
  @httpGet("/")
  public async index(req: Request, res: Response) {
    console.log("MocksController -> index -> res", res);
    console.log("MocksController -> index -> req", req);
    const response = 1;
    return Promise.resolve("MocksController found!");
  }
}
