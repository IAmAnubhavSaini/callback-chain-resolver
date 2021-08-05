declare type FnT<T> = {
    (value: T): T;
};
declare function series<T>(initValue: T, callbacks: FnT<T>[]): T;
declare function parallel<T>(initValue: T, fns: FnT<T>[]): T[];
export { parallel, series };
//# sourceMappingURL=index.d.ts.map