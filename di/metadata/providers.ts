import { Type } from "../types";
import { MetaKey } from "../types";

export function getProviders(target: Type): Type[] {
  return Reflect.getMetadata(MetaKey.Providers, target) ?? [];
}

export function setProviders(target: Type, providers: Type[]) {
  Reflect.defineMetadata(MetaKey.Providers, providers, target);
}

export function hasProviders(target: Type): boolean {
  return Reflect.hasMetadata(MetaKey.Providers, target);
}