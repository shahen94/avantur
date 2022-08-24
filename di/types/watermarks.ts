export const Watermark = {
  Injectable: Symbol('injectable_watermark'),
  Module: Symbol('module_watermark'),
};

export type Watermarks<K extends keyof typeof Watermark> = typeof Watermark[K];