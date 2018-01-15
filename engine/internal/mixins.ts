type Constructor<T> = new(...args: any[]) => T;

/**
 * Returns the final type of a Constructor.
 * 
 * Used to get the type returned by a mixin because the
 * compiler can't infer it by itself.
 * 
 * @param fn    Constructor to get the type of
 * 
 * @see https://stackoverflow.com/questions/47732015/whats-the-type-of-a-mixin-class
 */
export function getReturnTypeOf<T>(fn: Constructor<T>): T {
    return {} as T;
}