/**
 * Typescript中安全地使用JavaScript库：declare
 * 声明全局的变量、方法、类、对象
 */

//声明变量
declare var val1:string
declare let val2:number
declare const val3:boolean

val1 = 'hello'
val2 = 100
val3 = false  // TS2588: Cannot assign to 'val3' because it is a constant.

//声明函数
declare function toString(x:number):string

const x = toString(1)

// 注意：declare声明的所有类型，都只需要标明类型，而不需要实现
// 比如下面这样会报错
declare function toString(x:number){
    return String(x)
}

//声明类
declare class Person{
    public name:string
    private age:number

    constructor(name:string)

    getAge():number
}

//声明枚举
declare enum Direction{
    Up,
    Down,
    Left,
    Right
}

//声明模块类型：为缺少Typescript类型定义的三方库或者文件补齐类型定义。
//lodash.d.ts
declare module 'lodash'{
    export function first<T extends unknown>(array:T[]):T
}

//声明文件类型:当Typescript不知道我们导入的文件是什么类型时
declare module '*.jpg'{
    const src:string
    export default src
}
declare module '*.png'{
    const src:string
    export default src
}

// 声明命名空间，可看做是声明更复杂的变量
declare namespace ${
    const version:number
    function ajax(setting?:any):void
}
$.version
$.ajax()

//声明文件：以.d.ts结尾的文件为声明文件
// 只需要声明三方类库所暴露的API接口即可