export class ClosureAddFunctionExample {
    execute() {
        console.log(this.add(1)(2)(3)());
        console.log(this.add(1)(1)(1)(1)(1)(1)());
    }

    add(arg) {
        const infCurry = fn => {
            const next = (...args) => {
                return x => {
                    if (!x) {
                        return args.reduce((acc, a) => {
                            return fn.call(fn, acc, a)
                        }, arg)
                    }
                    return next(...args, x)
                }
            }
            return next()
        }

        return infCurry((x, y) => x + y)
    }
}