// Alternative is to define function type as `{ (value: any): any }`
type FnT = {
    (value: any): any
}

function resolver(initValue: any, callbacks: FnT[]) {
    return callbacks.reduce((value: any, cb: FnT) => cb(value), initValue);
}

export default resolver;
