const excludeFields = ["constructor"];

export function LogAll(prefix?: string) {
  return function (target: any) {
    const fields = Object.getOwnPropertyNames(target.prototype).filter(
      (field) => !excludeFields.includes(field)
    );

    fields.forEach((field) => {
      const original = target.prototype[field];
      target.prototype[field] = function (...args: any[]) {
        const result = original.apply(this, args);

        if (typeof result === 'object' && typeof result.then === 'function') {
          return result.then((data: any) => {
            console.log(`${prefix ?? ""} async ${field}(${args.join(", ")}) => ${data}`);
            return data;
          }).catch((error: any) => {
            console.log(`${prefix ?? ""} async ${field}(${args.join(", ")}) => ${error}`);
            throw error;
          });
        }
        console.log(`${prefix ?? ""}${field}(${args.join(", ")}) => ${result}`);
        return result;
      };
    });
  };
}
