import { Metadata } from "../metadata";
import { Type } from "../types";

export function Injectable() {
  return function(target: Type) {
    const deps = Reflect.getOwnMetadata('design:paramtypes', target);

    Metadata.mark.setInjectableMark(target);
    Metadata.providers.setProviders(target, deps);
  }
}