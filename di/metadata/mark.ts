import { Type } from "../types";
import { Watermark } from "../types/watermarks";

export function getInjectableMark(target: Type): Type[] {
  return Reflect.getMetadata(Watermark.Injectable, target) ?? [];
}

export function setInjectableMark(target: Type) {
  Reflect.defineMetadata(Watermark.Injectable, true, target);
}

export function hasInjectableMark(target: Type): boolean {
  return Reflect.hasMetadata(Watermark.Injectable, target);
}

export function getModuleMark(target: Type): Type[] {
  return Reflect.getMetadata(Watermark.Module, target) ?? [];
}

export function setModuleMark(target: Type) {
  Reflect.defineMetadata(Watermark.Module, true, target);
}

export function hasModuleMark(target: Type): boolean {
  return Reflect.hasMetadata(Watermark.Module, target);
}