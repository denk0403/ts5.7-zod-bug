export type Wrapper<T> = {
	_type: T;
};

export function stringWrapper(): Wrapper<string> {
	return { _type: "" };
}

// export function recursiveObjWrapper<T extends object>(obj: T): Wrapper<T> {
// 	return {
// 		_type: Object.fromEntries(
// 			Object.entries(obj).map(([key, value]) => [
// 				key,
// 				!!value && typeof value === "object" ? recursiveObjWrapper(value) : { _type: value },
// 			])
// 		),
// 	} as Wrapper<T>;
// }

export function objWrapper<T extends Record<string, Wrapper<any>>>(obj: T): Wrapper<T> {
	return {
		_type: obj,
	} as Wrapper<T>;
}

export type Unwrap<T extends Wrapper<any>> = T["_type"] extends Record<string, Wrapper<any>>
	? { [Key in keyof T["_type"]]: Unwrap<T["_type"][Key]> }
  : T["_type"];

export function unwrap<T extends Wrapper<any>>(wrapper: T): Unwrap<T> {
  return {} as Unwrap<T>;
}
