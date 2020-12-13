import { controller, httpGet, httpPost } from "inversify-express-utils";
import { Request, Response, NextFunction } from "express";
interface resp {
  body: { data: any };
  status: number;
}
const strictMap = new Map<string, any>();
strictMap.set("/test", { body: { data: { age: 28 } }, status: 212 });

const RegExpMap = new Map<RegExp, any>();

@controller("*")
export class MocksController {
  @httpGet("/")
  public async getHandler(req: Request, res: Response, next: NextFunction) {
    const url = req.originalUrl;

    const { response } = strictMap.get(url);
    if (!response) {
      res.status(404).send();
    } else {
      res.status(response.status);
      res.send(response.body);
    }

    next();
  }

  @httpPost("/")
  public async postHandler(req: Request, res: Response) {
    const { path, method, response } = req.body;
    strictMap.set(path, { method, response });
    return Promise.resolve("MocksController - postHandler found!");
  }
}
