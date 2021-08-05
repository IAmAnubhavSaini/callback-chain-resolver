// Alternative is to define function type as `{ (value: any): any }`
type FnT<T> = {
    (value: T): T
}

function typedResolver<T>(initValue:T, callbacks: FnT<T>[]) {
    return callbacks.reduce((value:T, cb: FnT<T>) => cb(value), initValue);
}

function resolver(initValue: any, callbacks: FnT<any>[]) {
    return callbacks.reduce((value: any, cb: FnT<any>) => cb(value), initValue);
}

export default resolver;

export {
    resolver,
    typedResolver
}
