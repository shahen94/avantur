import { injector } from "../injector";
import { Metadata } from "../metadata";
import { Type } from "../types";
import { Artifacts } from "./artifacts";

export class Compiler {
  static compile(moduleClass: Type) {
    injector.resolve(moduleClass);
  
    Metadata.imports
      .getImports(moduleClass)
      .forEach(Compiler.compile);
  
    return new Artifacts();
  }
}