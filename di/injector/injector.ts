import { Metadata } from "../metadata";
import { Type } from "../types";

export class Injector {
  private dependencies: Map<string, any>;

  constructor() {
    this.dependencies = new Map();
  }

  public getDependencies(target: Type): Type[] {
    if (Metadata.providers.hasProviders(target)) {
      return Metadata.providers.getProviders(target);
    }
    return [];
  }

  public resolveDependencies(target: Type) {
    const dependencies = this.getDependencies(target);
    dependencies.forEach((dependency) => {
      this.dependencies.set(dependency.name, dependency);
    });
  }

  public resolve(target: Type) {
    if (this.dependencies.has(target.name)) {
      return this.dependencies.get(target.name);
    }
    const tokens = Metadata.providers.getProviders(target) || [];
    const injections = tokens.map((token: Type<any>): any =>
      this.resolve(token)
    );
    const instance = new target(...injections);
    this.dependencies.set(target.name, instance);
    return instance;
  }
}

export const injector = new Injector();
