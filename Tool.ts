/**
 * TypeScript中提供了许多自带的工具类型
 * 它们全局可用，无需导入
 * 操作接口类型、联合类型、函数类型、字符串类型
 */

// Partial：将一个类型的所有属性变为可选，且该类型返回的类型是给定类型的所有子集
type Partial<T>={
    [P in keyof T]?:T[P]
}

interface Person{
    name:string
    age?:number
    weight?:number
}

//Required：将给定类型的所有属性变为必填
type Required<T>={
    [P in keyof T]-?:T[P]
}

type RequiredPerson = Required<Person>
// 相当于
interface RequiredPerson{
    name:string
    age:number
    weight:number
}

// Readonly：将给定类型所有属性设为只读，不可重新被赋值
type Readonly<T>={
    readonly[P in keyof T]:T[P]
}

type ReadonlyPerson = Readonly<Person>
// 相当于
interface RequiredPerson{
    readonly name:string
    readonly age:number
    readonly weight:number
}

//Pick：从给定类型中取出指定的键值，组成一个新类型
type Pick<T,K extends keyof T>={
    [P in K]:T[P]
}

type NewPerson = Pick<Person,'name'|'age'>
// 相当于
interface NewPerson{
    name:string
    age?:number
}

//Omit：返回去除指定类型的键值后返回的新类型
type Omit<T,K extends keyof any>=Pick<T,Exclude<keyof T,K>
type NewPerson = Omit<Person,'weight'>
// 相当于
interface NewPerson{
    name:string
    age?:number
}

/**
 * 操作接口类型
 */

// Exclude：从联合类型中去除指定的类型
type Exclude<T,U>=T extends U>never:T

type T = Exclude<'a'|'b'|'c','a'> // ‘b’|'c'

// Extract：从联合类型中提取指定的类型
type Extract<T,U> = T extends U?T:never

type T = Extract<'a'|'b'|'c','a'> //'a'

// NonNullable：从联合类型中剔除null或者undefined

type NonNullable<T> = T extends null | undefined?never:T

