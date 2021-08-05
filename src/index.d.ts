declare type FnT<T> = {
    (value: T): T;
};
declare function typedResolver<T>(initValue: T, callbacks: FnT<T>[]): T;
declare function resolver(initValue: any, callbacks: FnT<any>[]): any;
export default resolver;
export { resolver, typedResolver };
//# sourceMappingURL=index.d.ts.map