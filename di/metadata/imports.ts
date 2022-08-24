import { Type } from "../types";
import { MetaKey } from "../types";

export function getImports(target: Type): Type[] {
  return Reflect.getMetadata(MetaKey.Imports, target) ?? [];
}

export function setImports(target: Type, imports: Type[]) {
  Reflect.defineMetadata(MetaKey.Imports, imports, target);
}

export function hasImports(target: Type): boolean {
  return Reflect.hasMetadata(MetaKey.Imports, target);
}