import 'reflect-metadata';
import { Metadata } from '../metadata';
import { Type } from "../types"

type ModuleOptions = {
  imports?: Type[];
  providers?: Type[];
}

export function Module(config: ModuleOptions) {
  return function(target: Type) {
    if (config.providers) {
      config.providers.forEach(provider => {
        if (!Metadata.mark.hasInjectableMark(provider)) {
          throw new Error(`Provider ${provider.name} is not injectable`);
        }
      });
    }

    if (config.imports) {
      config.imports.forEach(module => {
        if (!Metadata.mark.hasModuleMark(module)) {
          throw new Error(`Module ${module.name} is not @Module decorated`);
        }
      });
    }
    Metadata.mark.setModuleMark(target);
    Metadata.imports.setImports(target, config.imports ?? []);
    Metadata.providers.setProviders(target, config.providers || []);
  }
}
