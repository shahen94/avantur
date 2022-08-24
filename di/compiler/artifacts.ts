import { injector } from "../injector";
import { Type } from "../types";

export class Artifacts {
  public get<T = unknown>(type: Type): T {
    return injector.resolve(type);
  }
}