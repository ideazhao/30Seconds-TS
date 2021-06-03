/**
 * 接口类型
 * 通过接口类型，清晰定义模块内、跨模块、跨项目代码的通信规则
 * 鸭子类型：只要两个对象的结构和属性、方法类型一致，它们的类型就是一致的。
 * 接口之前，通常是用注释来完成这件事
 */

// 先看函数类型
function Study(language:{name:string;age:()=>number}){

}

Study({
    name:'Typescript',
    age:()=>new Date().getFullYear()-2012
})

//值得注意的是，如下代码会报错
Study({
    id:2,
    name:'Typescript',
    age:()=>new Date().getFullYear()-2012
})

//而如下代码不会报错
let ts = {
    id:2,
    name:'Typescript',
    age:()=>new Date().getFullYear()-2012
}
Study(ts)

//同样是存在多余的参数，当把对象字面量赋值给一个变量时，ts只会检查规定的参数

//虽然我们可以通过内联形式定义一个参数类型，但它是不可复用的
//ts中使用interface关键字来定义可复用的接口

interface language{
    name:string;
    age:()=>number
}

// 由此，前面的函数定义可以如下这样写

function newStudy(language:language){
    console.log(`${language.name}`)
}

/**
 * 可缺省属性
 */

interface language1{
    name:string;
    age?:()=>number // 通过名称后加？定义可缺省属性
}

/**
 * 只读属性
 */

 interface newlanguage2{
    readonly name:string; // 通过名称前加readonly定义只读属性
    age?:()=>number 
}

/**
 * 函数类型
 */

type StudyLanguageType = (language:language)=>void

/**
 * 继承与实现
 */

interface DynamicLanguage extends language{
    rank:number  //定义新属性
}

interface TypeSafeLanguage extends language{
    typeChecker:string // 定义新属性
}

interface TypeScriptLanguage extends DynamicLanguage,TypeSafeLanguage{
    name:'TypeScript'  //这里会覆盖掉继承接口的同名属性，但是只能覆盖兼容类型，不同类型的不能覆盖
}

// 多数情况下，接口类型都能用类型别名替代，但它们还是有区别，比如：
// 重复定义的接口类型，属性会叠加,而重复定义类型别名则会报错

interface in1{
    name:string
}

interface in1{
    age:number
}
