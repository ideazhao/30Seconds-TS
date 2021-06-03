/**
 * 联合与交叉类型：比单一类型更复杂的类型
 */


//联合类型：表示变量类型不是单一类型，而是多种不同类型的组合
function format1(size:number | string){
    console.log(size)
}
format1(1)
format1('1')
//其他类型会报错

//使用类型别名抽离联合类型
type sizeFormat = number | string

function format2(size:sizeFormat){
    console.log(size)
}

//不仅原子类型可以联合，接口类型也可以
interface Bird{
    name:string,
    fly:()=>void
}

interface Fish{
    name:string,
    you:()=>void
}

const getName:()=> Bird | Fish = ()=>{
    return {

    } as Bird | Fish
}

/**
 * 交叉类型：合并后的类型
 */

type Useless = string & number  //这种是没有意义的，因为任何一个类型都不可能同时是二者，这等同于never

//交叉类型最大的用处是将多个接口类型合并成一个类型，实现等同接口继承的效果

type InterfaceActionType = {id:number;name:string} & {
    age:number
}
const mixed:InterfaceActionType = {
    id:2,
    name:'idea',
    age:18
}
//如果有同名属性，则要看他们是否能兼容，如不能兼容则是never，这个交叉类型就没有用了，如果能兼容则是子类型

//注：联合交叉类型可以组合使用，这就涉及到两个操作符的优先级了

//如果是原始类型和子类型组成的联合类型，则类型会被缩减成原始类型

type name1 = string | 'idea'  //被缩减为string

//如需要防止缩减，则只需给父类型添加 &{}即可

type name2 = string & {} | 'idea'