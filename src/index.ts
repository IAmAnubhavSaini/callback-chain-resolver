// Alternative is to define function type as `{ (value: any): any }`

type FnT<T> = {
    (value: T): T
}

function series<T>(initValue:T, callbacks: FnT<T>[]) {
    return callbacks.reduce((value:T, cb: FnT<T>) => cb(value), initValue);
}

function parallel<T>(initValue:T, fns: FnT<T>[]) {
    return fns.map((fn:FnT<T>) => fn(initValue))
}

export {
    parallel,
    series
}
