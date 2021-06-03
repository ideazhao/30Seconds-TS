/**
 * 泛型：类型参数化——将原来某种具体类型进行参数化
 * 设计泛型的原因：约束类型成员间的关系
 * 函数参数和返回值、类或接口成员和方法之间的关系
 */
function reflect<P>(param:P){
    return param
}
const reflectStr = reflect<string>('1')
const reflectNum = reflect<number>(1)
//注，如果传入了某值，其实可以省略前面的类型，直接传值，类型可推断得出

//约束属性、成员的类型
function reflectArray<P>(param:P[]){
    return param
}
const reflectArr = reflectArray([1,'a']) //(number | string)[]

//约束参数与返回值的类型的关系
function useState<S>(state:S,intialValue?:S){
    return [state,(s:S)=>void 0] as unknown as [S,(s:S)=>void]
}

//泛型入参可以是任意个数

//泛型类
class Memory<S>{
    store:S;
    constructor(store:S){
        this.store = store
    }
    set(store:S){
        this.store = store
    }
    get(){
        return this.store
    }
}

//操作符运算表达式
type stringOrNumberArray<E>=E extends number | string?E[]:E


