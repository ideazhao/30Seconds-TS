/**
 * 定义函数类型
 */
type Adder = (a:number,b:number)=>number

const add:Adder = (a,b)=>{
    return a+b
}

const x = add(1,1) //x类型为number
const y = add(1,'1') //参数类型错误