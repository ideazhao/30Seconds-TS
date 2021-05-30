/**
 * 函数
 */
function sum(a:number,b:number):number{
    return a+b
}

//如果显示指定函数没有返回值，应为函数指定void类型作为返回值类型
function fn1():void{

}

/**ts中箭头函数定义函数，此时并不是函数的实现，而仅仅是定义一个函数类型
 * 定义函数类型
 */
type Adder = (a:number,b:number)=>number

const add:Adder = (a,b)=>{
    return a+b
}

const x = add(1,1) //x类型为number
const y = add(1,'1') //参数类型错误

//声明函数类型的属性
interface Entity{
    add:(a:number,b:number)=>number
}
const entity:Entity={
    add:(a,b)=>a+b
}

//一般而言，函数的返回值类型能够根据函数入参类型推断出，但也有特例
//Generator函数

//可选参数
function fn2(x?:string){
    return x
}
fn2() //undefined
fn2('hello world') //hello world

//默认参数，根据默认参数类型推断
//可以为默认参数定义类型，但必须是参数的子类型
function fn3(x='hello'){
    return x
}
fn3() //hello
fn3('hi') //hi
fn3(1) //报错

//剩余参数
function fn4(...nums:number[]){
    return nums.reduce((a,b)=>a+b,0)
}

//this 必须显式指定
//只要在函数的第一个参数中声明即可
function fn5(this:Window,name:string){
    console.log(this.name)
}
window.fn5 = fn5
window.fn5('hi')

const obj={
    fn5(){
    }
}

obj.fn5('hi')  //此时因为fn5中的this指向window而非obj，就会报错

//函数重载
//如果需要通过传入不同类型数据返回不同结果
function convert(x:string | number | null):string|number|-1{
  if(typeof x === 'string'){
      return Number(x)
  }
  if(typeof x === 'number'){
      return String(x)
  }
  return -1
}

//使用重载可以这么做
function convert(x:string):number;
function convert(x:number):string;
function convert(x:null):-1;
function convert(x:string | number | null):any{
    if(typeof x === 'string'){
        return Number(x)
    }
    if(typeof x === 'number'){
        return String(x)
    }
    return -1
  }

//类型谓词is  典型场景是自定义类型守卫
function isString(s):s is string{
    return typeof s === 'string'
}
function isNumber(n:number){
    return typeof n === 'number'
}
function operation(x:unknown){
    if(isString(x)){
        //x类型缩小为string
    }
    if(isNumber(x)){
        //unknown不能赋值给number
    }
}
