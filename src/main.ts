const stringEcho = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1, 2, 3]))
console.log(isObj({name: 'John'}))
console.log(isObj(null))

const isTrue = <T>(arg: T): {arg: T, is: boolean}  => {
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}

console.log(isTrue('Dave'))
console.log(isTrue(0))
console.log(isTrue(true)) 


interface BoolCheck<T> {
    value:T,
    is: boolean
}

const isTrueInterface = <T>(arg: T): BoolCheck<T>  => {
    if (Array.isArray(arg) && !arg.length) {
        return {value: arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}
}

interface HasId {
    id: number
}

const processUser = <T extends HasId>(user: T): T => {
    return user
}

console.log(processUser({id: 1, name: 'Jon'}))
console.log(processUser({id: 1, name: 'Jon'}))