import { controller, httpGet, interfaces } from "inversify-express-utils";
import { Request, Response, NextFunction } from "express";

@controller("/mock-engine")
export class MockEngineController implements interfaces.Controller {
  @httpGet("/")
  public async index(req: Request, res: Response, next: NextFunction) {
    return "MockEngineController - index method";
  }
}

