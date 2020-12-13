import { injectable } from "inversify";

type Path = string;
type ResponseDescription = Record<string, any>;
type ExpectationId = string;

@injectable()
export class ExpectationsService {
  private readonly requestResponseMap: Map<
    Path,
    ResponseDescription
  > = new Map();

  private readonly expectationsMap: Map<ExpectationId, Path> = new Map();

  public setExpectation(): void {}

  public getExpectation() {}

  public getExpectations() {}

  public eraseExpectations() {}
}
