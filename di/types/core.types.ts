export type Type<T = unknown> = {
  new (...args: any[]): T;
}; 